import express from "express";
import { connect } from "./../db";

const router = express.Router();

router.get("/posts", async (_req, res) => {
  const db = await connect(); // TODO - some stuff sahil said- error handling with db
  const posts = await db.query(
    "select * from user_posts where parent_post_id IS NULL" //getting all the parent posts
  );
  res.json(posts[0]);
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
    "insert into user_posts(user_id,content) values (? , ?)",
    [req.session.uid, req.body.content]
  );
  res.json(np);
});

export default router;
