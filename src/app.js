//import dotenv from "dotenv";
import 'dotenv/config'; 
import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
// import pruductRouter from "./routes/produt.routes";
// import categoryRouter from "./routes/category.routes";




//env.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);
// app.use("/api/products", productRoutes);
// app.use("/api/categories", categoriesRoutes);

export default app;