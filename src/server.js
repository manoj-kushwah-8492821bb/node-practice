import express from "express";
import "dotenv/config";
import router from "../routes/index.js";

const app = express();
const PORT = process.env.PORT || 8000; // define port

app.use(express.json()); // to access data from body request
app.use("/", router);

// server start
app.listen(PORT, () =>
  console.log(`server is running at http://localhost:${PORT}`)
);
