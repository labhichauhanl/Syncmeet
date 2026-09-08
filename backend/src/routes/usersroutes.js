import { Router } from "express";
import { login, register } from "../controllers/user.js";

const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/addToActivity")
router.route("/GetAllActivity")

export default router;