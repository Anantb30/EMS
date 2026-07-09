require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Employee = require("./models/Employee");

const sampleEmployees = [
  { name: "Rahul", department: "IT", salary: 50000 },
  { name: "Priya", department: "HR", salary: 40000 },
];

const seed = async () => {
  await connectDB();
  await Employee.deleteMany({});
  await Employee.insertMany(sampleEmployees);
  console.log("Seeded sample employees.");
  await mongoose.disconnect();
  process.exit(0);
};

seed();
