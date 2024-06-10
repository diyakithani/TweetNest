import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Hello World!");
});

router.get("/add", (req, res) => {
  if (typeof req.query.a !== "string" || typeof req.query.b !== "string") {
    return res.send("INVALID PARAMETER");
  }
  res.json({ sum: parseInt(req.query.a) + parseInt(req.query.b) });
});

router.get("/hello", (req, res) => {
  if (typeof req.query.name !== "string") {
    return res.send("Hello World"); //slayyyyyyyyyyyyyy
  }
  return res.send("Hello " + req.query.name);
});

// Access the session as req.session
router.get("/views", function (req, res) {
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

export default router;
