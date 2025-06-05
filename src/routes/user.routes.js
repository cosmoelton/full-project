import express from "express";
// import { Router } from "express";
import controller from "../controllers/userController.js";
// import auth from '../middlewares/auth.js';
//import auth from "../middlewares/auth";


userRoutes.post("/register", controller.registerUser);
userRoutes.post("/login", controller.authentication);

// userRoutes.get("/", auth, controller.listUsers);
userRoutes.get("/", controller.listUsers);
// userRoutes.put("/:id", auth, controller.updateUser);
userRoutes.put("/:id", controller.updateUser);
// userRoutes.delete("/:id", auth, controller.deleteUser);
userRoutes.delete("/:id", controller.deleteUser);

export default userRoutes;