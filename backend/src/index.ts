import "dotenv/config";
import express from "express";
import session from "express-session";
import test from "./routes/test";
import auth from "./routes/auth";
import activity from "./routes/activity";

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
app.use("/test", test);
app.use("/auth", auth);
app.use("/activity", activity);

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
