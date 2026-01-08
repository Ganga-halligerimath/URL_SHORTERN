// import express from "express";
// import { createShortUrl,redirectUrl } from "../controllers/url.controller.js";

// const router =express.Router();

// router.post("/shorten",createShortUrl);
// router.get("/shortCode",redirectUrl);

// export default router;

import express from "express";
import { createShortUrl, redirectUrl,getMyUrls,deleteUrl } from "../controllers/url.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/shorten", authMiddleware, createShortUrl); 
router.get("/my-urls", authMiddleware, getMyUrls); 
router.get("/myLatest-urls", authMiddleware, getMyUrls); 
router.delete("/deleteUrl/:shortCode", authMiddleware, deleteUrl); 
router.get("/:shortCode", redirectUrl);           

export default router;
