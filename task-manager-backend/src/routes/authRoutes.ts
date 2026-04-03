import express from "express";
import { register, login } from "../controllers/authController";
import { createTask, getTasks } from "../controllers/taskController";
import { authenticate } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/", authenticate, createTask);
router.get("/", authenticate, getTasks);

export default router;