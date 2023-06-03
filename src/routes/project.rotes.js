const express = require("express");
const addProject = require("../controllers/project/addProject.controller");
const updateProject = require("../controllers/project/updateProject.controller");
const getProject = require("../controllers/project/getProjects.controller");
const getOverview = require("../controllers/project/getOverview.controller");
const getChartData = require("../controllers/project/getChartData.controler");

const app = express.Router();

app.get("/", getProject);
app.get("/overview", getOverview);
app.get("/stats", getChartData);
app.post("/", addProject);
app.patch("/:id", updateProject);

module.exports = app;
