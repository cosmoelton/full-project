import express from express;
import controller from "../controllers/userController";
import auth from "authenticator";


const router = express.Router();

router.get("/", auth, controller.listUsers);