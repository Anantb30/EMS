require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const employeeRoutes = require("./routes/employeeRoutes");
const loggerMiddleware = require("./middleware/loggerMiddleware");
const connectDB = require("./config/db");

connectDB();

// Middleware

app.use(express.json());
app.use(loggerMiddleware);
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins
}));

// Routes
app.use("/employees", employeeRoutes);

app.get("/", (req, res) => {

  res.send("Employee Management API Running");

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server Running on Port ${PORT}`);

});