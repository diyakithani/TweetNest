import express from "express";
import { connect } from "./../db";
import { User } from "src/models/user";

const router = express.Router();

// TODO
// login
// logout
// register
// hashing using bcrypt

router.post("/signup", async (req, res) => {
  if (
    typeof req.body.username != "string" ||
    typeof req.body.password != "string" || //TODO regex stuff sahil said
    typeof req.body.email != "string" ||
    typeof req.body.birthday != "string" ||
    typeof req.body.pfp_path != "string" ||
    req.body.username.trim().length === 0 ||
    req.body.password.trim().length === 0 ||
    req.body.email.trim().length === 0 ||
    req.body.birthday.trim().length === 0 ||
    req.body.pfp_path.trim().length === 0
  ) {
    res.status(400);
    return res.send("invalid information entered");
  }
  const db = await connect();
  const newuser = await db.query(
    "Insert into users values(?,?,?,?,?,DEFAULT)",
    [
      req.body.username,
      req.body.password, //TODO BCRYPT DEKH HASH KRNA HAI
      req.body.email,
      req.body.birthday,
      req.body.pfp_path,
    ]
  );
  res.json(newuser);
});
router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const db = await connect();
  const user = await db.query<User[]>(
    "Select username,password,user_id from users where username=?",
    [username]
  );
  if (user[0][0] != undefined && user[0][0].password == password) {
    req.session.uid = user[0][0].user_id;
    res.status(200);
    res.send("LOGIN SUCCESSFUL");
  } else {
    res.status(401);
    res.send("Wrong stuff u entered bro");
  }
});

router.get("/logout", (req, res) => {
  req.session.uid = undefined;
  res.send("LOGOUT SUCCESFUL");
});

export default router;
