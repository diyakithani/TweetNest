import "dotenv/config";
import express from "express";
import { connect } from "./db";
import session from "express-session";

const app = express();

// Middlewares
app.use(express.json()); //middleware which converts req body to json
app.use(
  session({
    secret: process.env.SESSION_SECRET ?? "",
    cookie: { maxAge: 60000 },
  })
);

// Augment express-session with a custom SessionData object
declare module "express-session" {
  interface SessionData {
    //bruh
    views: number;
  }
}

// Endpoints
app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.get("/add", (req, res) => {
  if (typeof req.query.a !== "string" || typeof req.query.b !== "string") {
    return res.send("INVALID PARAMETER");
  }
  res.json({ sum: parseInt(req.query.a) + parseInt(req.query.b) });
});

app.get("/hello", (req, res) => {
  if (typeof req.query.name !== "string") {
    return res.send("Hello World"); //slayyyyyyyyyyyyyy
  }
  return res.send("Hello " + req.query.name);
});

app.get("/posts", async (_req, res) => {
  const db = await connect(); //todo - some stuff sahil said
  const posts = await db.query(
    "select * from user_posts where parent_post_id IS NULL"
  );
  res.json(posts[0]);
});

app.post("/posts", async (req, res) => {
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

// Access the session as req.session
app.get("/views", function (req, res) {
  if (req.session.views) {
    req.session.views++;
    res.setHeader("Content-Type", "text/html");
    res.write("<p>views: " + req.session.views + "</p>");
    res.end();
  } else {
    req.session.views = 1;
    res.end("welcome to the session demo. refresh!");
  }
});

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
