import { Router } from "express";
import express from express;
import controller from "../controllers/userController";
import auth from "authenticator";


const router = express.Router();

router.get("/", auth, controller.listUsers);

router.post("/register", controller.registerUser);

router.post("/login", controller.authentication)

router.put("/:id", auth, controller.updateUser);

router.delete(":id", auth, controller.deleteUser);

export default router;