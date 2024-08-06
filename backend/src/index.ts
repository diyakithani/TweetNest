import "dotenv/config";
import express from "express";
import session from "express-session";
import test from "./routes/test";
import auth from "./routes/auth";
import activity from "./routes/activity";
import cors from "cors";
import * as companion from "@uppy/companion";

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
const corsOptions: cors.CorsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions)); // Cross Origin Request Enabler

//uppy companion
const { app: companionApp, emitter } = companion.app({
  server: {
    host: process.env.HOST + ":" + process.env.PORT,
    protocol: "http",
    path: "/companion",
  },
  filePath: process.env.UPPY_FILE_PATH,
  secret: process.env.SESSION_SECRET,
  corsOrigins: corsOptions,
});
app.use("/companion", companionApp);

// @ts-ignore
emitter.on("upload-start", ({ token }) => {
  console.log("Upload started", token);

  // @ts-ignore
  function onUploadEvent({ action, payload }) {
    if (action === "success") {
      emitter.off(token, onUploadEvent); // avoid listener leak
      console.log("Upload finished", token, payload.url);
    } else if (action === "error") {
      emitter.off(token, onUploadEvent); // avoid listener leak
      console.error("Upload failed", payload);
    }
  }
  emitter.on(token, onUploadEvent);
});

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
