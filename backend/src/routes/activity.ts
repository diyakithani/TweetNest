import express from "express";
import { connect } from "./../db";
import { authenticate } from "../middlewares/authenticate";

const router = express.Router();
router.use(authenticate);

//get posts endpoint
router.get("/posts", async (req, res) => {
  //pagination query parameters
  const page_size = parseInt((req.query.pg_size as string) ?? "10");
  const page_num = parseInt((req.query.pg_num as string) ?? "1");
  const offset = (page_num - 1) * page_size;

  const uid = req.query.uid; //at a specific user's page

  try {
    const db = await connect();
    if (uid === undefined) {
      const posts = await db.query(
        "select * from user_posts where parent_post_id IS NULL limit ? offset ?",
        [page_size, offset] //getting all the parent posts
      );
      res.json(posts[0]);
    } else {
      const posts = await db.query(
        "select * from user_posts where user_id= ? and parent_post_id IS NULL limit ? offset ?",
        [parseInt(uid as string), page_size, offset] //getting all the parent posts
      );
      res.json(posts[0]);
    }
  } catch (err) {
    res.status(500).send("internal server error");
  }
});

//create post
router.post("/posts", async (req, res) => {
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

//Delete post endpoint
router.delete("/posts/:post_id", async (req, res) => {
  const id = parseInt(req.params.post_id);
  const db = await connect();
  const p = await db.query(
    "select * from user_posts where user_id=? and post_id=?",
    [req.session.uid, id]
  );
  if ((p[0] as []).length == 0) {
    return res.status(401).send("cannot delete");
  }
  await db.query("delete from user_posts where post_id=?", [id]);
  return res.send(
    "deleted!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! your post has ceased to exist"
  );
});

//follow endpoint
router.put("/follow", async (req, res) => {
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

//get followers endpoint
router.get("/followers", async (req, res) => {
  const f = req.query.uid ?? req.session.uid;
  const db = await connect();
  const dbresult = await db.query(
    "select follower from user_followers where followed=?",
    [f]
  );
  return res.json(dbresult[0]);
});

//get following endpoint
router.get("/following", async (req, res) => {
  const f = req.query.uid ?? req.session.uid;
  const db = await connect();
  const dbresult = await db.query(
    "select users.username from user_followers join users on user_followers.followed=users.user_id where follower=?",
    [f]
  );
  return res.json(dbresult[0]);
});

export default router;
