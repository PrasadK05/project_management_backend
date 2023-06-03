const Project = require("../../models/project.model");

let addProject = async (req, res) => {
  let data = req.body;
  try {
    let project = await Project.create({ ...data });
    return res
      .status(200)
      .send({ status: true, message: "New project added successfully" });
  } catch (error) {
    res
      .status(404)
      .send({ status: false, message: "New project added unsuccessfull" });
  }
};

module.exports = addProject;
