import { Router } from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUser,
} from "../controllers/user.controller.js";

const router = Router();

// Routes
router.post("/", createUser);
router.put("/:id_user", updateUser);
router.delete("/:id_user", deleteUser);
router.get("/", getUsers);
router.get("/:id_user", getUser);

export default router;
