import express from "express";
import { connect } from "./../db";

const router = express.Router();

router.get("/posts", async (_req, res) => {
  const db = await connect(); //todo - some stuff sahil said
  const posts = await db.query(
    "select * from user_posts where parent_post_id IS NULL"
  );
  res.json(posts[0]);
});

router.post("/posts", async (req, res) => {
  const db = await connect();
  if (
    typeof req.body.content !== "string" ||
    req.body.content.trim().length === 0
  ) {
    res.status(400); //invalid argument
    return res.send("MAKE A POST WITH ACTUAL CONTENT ON MY PLATFORM!!!");
  }
  if (typeof req.body.user_id !== "number") {
    res.status(400);
    return res.send("user id invalid");
  }
  const np = db.query(
    "insert into user_posts(user_id,content) values (" +
      req.body.user_id +
      "," +
      '"' +
      req.body.content +
      '"' +
      ");"
  ); //good
  res.json(np);
});

export default router;
