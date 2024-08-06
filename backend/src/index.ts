import "dotenv/config";
import express from "express";
import session from "express-session";
import test from "./routes/test";
import auth from "./routes/auth";
import activity from "./routes/activity";
import cors from "cors";
import companion from "@uppy/companion";

const app = express();

// Middlewares
app.use(express.json()); //middleware which converts req body to json
app.use(
  session({
    secret: process.env.SESSION_SECRET ?? "",
    cookie: { maxAge: 10 * 60 * 1000 },

    rolling: true,
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
); // Cross Origin Request Enabler

//uppy companion
const { app: companionApp } = companion.app({
  server: {
    host: process.env.HOST + ":" + process.env.PORT,
    protocol: "http",
    path: "/companion",
  },
  filePath: process.env.UPPY_FILE_PATH,
});
app.use("/companion", companionApp);

// Augment express-session with a custom SessionData object
declare module "express-session" {
  interface SessionData {
    uid: number;
    views: number;
  }
}

// Endpoints
app.use("/test", test);
app.use("/auth", auth);
app.use("/activity", activity);

// Start the server
const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

companion.socket(server);
