import "dotenv/config";
import express from "express";
import session from "express-session";
import test from "./routes/test";
import auth from "./routes/auth";
import activity from "./routes/activity";
import cors from "cors";
import { Server } from "@tus/server";
import { FileStore } from "@tus/file-store";

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

// Augment express-session with a custom SessionData object
declare module "express-session" {
  interface SessionData {
    uid: number;
    views: number;
  }
}

//tus server
const uploadApp = express();
const server = new Server({
  path: "/uploads",
  datastore: new FileStore({ directory: process.env.TUS_FILES! }),
});

uploadApp.all("*", server.handle.bind(server));
app.use("/uploads", uploadApp);

// Endpoints
app.use("/test", test);
app.use("/auth", auth);
app.use("/activity", activity);

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
