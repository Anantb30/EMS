const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    department: {
      type: String,
      required: [true, "Department is required"],
      trim: true,
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
      min: 0,
    },
  },
  { timestamps: true }
);

// Reshape output so the frontend can keep using `employee.id`
// instead of switching everywhere to Mongo's `_id`.
employeeSchema.set("toJSON", {
  virtuals: true,
  transform: (_doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
