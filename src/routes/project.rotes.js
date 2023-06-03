const express = require("express");
// Imported middleware
const verifyToken = require("../middlewares/auth.middleware");

// Imported controllers from project controller
const addProject = require("../controllers/project/addProject.controller");
const updateProject = require("../controllers/project/updateProject.controller");
const getProject = require("../controllers/project/getProjects.controller");
const getOverview = require("../controllers/project/getOverview.controller");
const getChartData = require("../controllers/project/getChartData.controler");

const app = express.Router();

// Middleware
app.use(verifyToken);

// Project api
app.get("/", getProject);
app.get("/overview", getOverview);
app.get("/stats", getChartData);
app.post("/", addProject);
app.patch("/:id", updateProject);

module.exports = app;
