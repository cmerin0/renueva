import { Router } from "express";
import {
  getUserTypes,
  createUserType,
  updateUserType,
  getUserType,
  deleteUserType,
  getUserTypeUsers,
} from "../controllers/usertype.controller.js";

const router = Router();

// Routes
router.post("/", createUserType);
router.get("/", getUserTypes);
router.put("/:id_type_user", updateUserType);
router.delete("/:id_type_user", deleteUserType);
router.get("/:id_type_user", getUserType);

router.get("/:id_type_user/users", getUserTypeUsers);

export default router;
