const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const PORT = 3000;

// MODELS
const Users = require("./models/Users");
const Tasks = require("./models/Tasks");

//DATABASE SETUP

const db_username = "malekabuanas1245",
  db_password = "3368671636302586AbuAnas",
  database = "taskman";

mongoose
  .connect(
    `mongodb+srv://${db_username}:${db_password}@cluster0.zytcvqi.mongodb.net/${database}`
  )
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => console.error(err));

// ROUTING
// simple get route
app.get("/", (req, res) => {
  res.send("Server is running successfully");
});

//get all users
app.get("/users", async (req, res) => {
  const users = await Users.find();
  res.json(users);
});

// add new users
app.post("/adduser", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // ckecking for all required information
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide username, email, and password" });
    }

    // checking if the users exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    // saving new user in the schema
    const newUser = new Users({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (err) {
    // catching any errors
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// uodate user
app.put("/updateuser/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const { username, email, password } = req.body; // البيانات الجديدة للمستخدم
    // ckecking for all required information
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide username, email, and password" });
    }
    // checking if the users exists
    const existingUser = await Users.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    // updating user's information
    existingUser.username = username;
    existingUser.email = email;
    existingUser.password = password;
    await existingUser.save(); // save changes to database
    res
      .status(200)
      .json({ message: "User updated successfully", user: existingUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

//delete user
app.delete("/deleteuser/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    // checking if the users exists
    const existingUser = await Users.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    // delete user from database
    await Users.deleteOne({ _id: userId });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// // Log-in
// app.get("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const exUser = await Users.findOne({ email: email, password: password });
//   if (!exUser) {
//     return res.status(404).json({ message: "Email or password are incorrect" });
//   }
//   res.json(exUser);
// });
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // checking for email and password
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }

    // checking if the user exists
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // checking if the password is correct
    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // if everything is correct, return user information
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
