import express from "express";
import morgan from "morgan";

const app = express();

// Import routes
import userTypeRoutes from "./routes/usertypes.routes.js";
import userRoutes from "./routes/users.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/usertypes", userTypeRoutes);
app.use("/api/users", userRoutes);

export default app;
