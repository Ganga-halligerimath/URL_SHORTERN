import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import urlRoutes from "./routes/url.routes.js"
import authRoutes from "./routes/auth.routes.js";

dotenv.config(); 

const app = express();
// const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

app.use("/api/url", urlRoutes);         
app.use("/api/auth",authRoutes);
app.use("/", urlRoutes);


export default app;
