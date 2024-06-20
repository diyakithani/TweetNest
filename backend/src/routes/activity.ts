import express from "express";
import { connect } from "./../db";

const router = express.Router();

router.get("/posts", async (req, res) => {
  if (req.session.uid === undefined) {
    return res.status(403).send("USER AUTHENTICATION SUS AF NGL ONGOD");
  }
  try {
    const db = await connect();
    const posts = await db.query(
      "select * from user_posts where parent_post_id IS NULL" //getting all the parent posts
    );
    res.json(posts[0]);
  } catch (err) {
    res.status(500).send("internal server error");
  }
});

//create post
router.post("/posts", async (req, res) => {
  if (req.session.uid === undefined) {
    return res.status(403).send("USER AUTHENTICATION SUS AF NGL ONGOD");
  }
  if (
    typeof req.body.content !== "string" ||
    req.body.content.trim().length === 0
  ) {
    res.status(400); //invalid argument
    return res.send("MAKE A POST WITH ACTUAL CONTENT ON MY PLATFORM!!!");
  }
  const db = await connect();
  const np = await db.query(
    "insert into user_posts(user_id,content, parent_post_id) values (? , ?, ?)",
    [req.session.uid, req.body.content, req.body.parent_post_id ?? null]
  );
  res.json(np);
});

//like post endpoint
router.put("/like", async (req, res) => {
  if (req.session.uid == undefined) {
    return res
      .status(403)
      .send("USER AUTHENTICATION SUS AF NGL ONGOD NOT COOL");
  }
  if (typeof req.body.post_id !== "number") {
    return res.status(400).send("No post id");
  }
  const db = await connect();
  const l = await db.query(
    "select * from post_likes where user_id=? and post_id=?",
    [req.session.uid, req.body.post_id]
  );
  if ((l[0] as []).length === 0) {
    try {
      await db.query("insert into post_likes(post_id, user_id) values (?,?)", [
        req.body.post_id,
        req.session.uid,
      ]);
      return res.send(
        req.session.uid + " liked " + req.body.post_id + " - post id"
      );
    } catch (err) {
      return res.status(400).json(err);
    }
  } else {
    await db.query("delete from post_likes where post_id=? and user_id=?", [
      req.body.post_id,
      req.session.uid,
    ]);
    return res
      .status(200)
      .send(
        "POST UNLIKE KARDIYA HAI BY " +
          req.session.uid +
          " post id: " +
          req.body.post_id
      );
  }
});

//follow endpoint
router.put("/follow", async (req, res) => {
  if (typeof req.session.uid !== "number") {
    return res
      .status(403)
      .send("USER AUTHENTICATION SUS AF NGL ONGOD NOT COOL BRUH");
  }
  if (typeof req.body.user_id !== "number") {
    return res.status(400).send("NO USER ID :(");
  }
  const db = await connect();
  const f = await db.query(
    "select * from user_followers where follower=? and followed=?",
    [req.session.uid, req.body.user_id]
  );
  if ((f[0] as []).length === 0) {
    try {
      await db.query(
        "insert into user_followers(follower, followed) values(?,?)",
        [req.session.uid, req.body.user_id]
      );
      return res.send("FOLLOWER ADDED ");
    } catch (err) {
      return res.status(400).json(err);
    }
  } else {
    await db.query(
      "delete from user_followers where follower=? and followed=?",
      [req.session.uid, req.body.user_id]
    );
    return res.send("Follower REMOVED");
  }
});

export default router;
