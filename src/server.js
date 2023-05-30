require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connect = require("./config/db");

// controller functions
const loginFunction = require("./controllers/auth/login.controller");
const logoutFunction = require("./controllers/auth/logout.controller");

const PORT = process.env.PORT;

const app = express();

// Middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

// Auth api
app.post("/login", loginFunction);
app.get("/logout", logoutFunction);

app.get("/", (req, res) => {
  return res.send("Project Management Backend");
});

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`running at ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
