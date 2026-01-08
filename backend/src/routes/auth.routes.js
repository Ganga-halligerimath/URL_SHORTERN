// import express from "express";
// import { register, login } from "../controllers/auth.controller.js";

// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);

// export default router;
import express from "express";
import { register,login } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

import authMiddleware from "../middleware/auth.middleware.js";

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    user: req.user
  });
});


export default router;
