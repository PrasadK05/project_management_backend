const Project = require("../../models/project.model");

let updateProject = async (req, res) => {
  let { id } = req.params;
  let { status } = req.body;
  try {
    let project = await Project.findByIdAndUpdate({ _id: id }, { status });
    return res
      .status(200)
      .send({ status: true, message: "Project status updated successfully" });
  } catch (error) {
    res
      .status(404)
      .send({ status: false, message: "Project status not get updated" });
  }
};

module.exports = updateProject;
