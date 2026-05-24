const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/* ===== MongoDB Connection ===== */
mongoose.connect("mongodb://127.0.0.1:27017/appointmentDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

/* ===== Appointment Schema ===== */
const AppointmentSchema = new mongoose.Schema({
  patientName: String,
  doctor: String,
  date: String,
  time: String,
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

/* ===== User Schema ===== */
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

/* ===== Register API ===== */
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.json({ success: true, message: "Registered successfully" });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ===== Login API ===== */
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.password === password) {
      res.json({ success: true, message: "Login successful", user });
    } else {
      res.json({ success: false, message: "Wrong password" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

/* ===== Book Appointment ===== */
app.post("/book", async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.json({ message: "Appointment Booked Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error saving data" });
  }
});

/* ===== Get Appointments ===== */
app.get("/appointments", async (req, res) => {
  try {
    const data = await Appointment.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching appointments" });
  }
});

/* ===== Delete Appointment ===== */
app.delete("/appointments/:id", async (req, res) => {
  console.log("Deleting ID:", req.params.id); // Debug log
  try {
    const deleted = await Appointment.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.json({ message: "Appointment deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting appointment" });
  }
});

/* ===== Server ===== */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
