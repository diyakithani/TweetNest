import { RequestHandler } from "express";

//checks if user is logged in
export const authenticate: RequestHandler = (req, res, next) => {
  if (typeof req.session.uid !== "number") {
    return res
      .status(403)
      .send("USER AUTHENTICATION SUS AF NGL ONGOD NOT COOL BRUH");
  }
  next();
};
