import express from "express";
import cors from "cors";
import env from "dotenv";
import userRouter from "./routes/user.routes";
// import pruductRouter from "./routes/produt.routes";
// import categoryRouter from "./routes/category.routes";




env.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);
// app.use("/api/products", productRoutes);
// app.use("/api/categories", categoriesRoutes);

export default app;