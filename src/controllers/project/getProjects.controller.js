const Project = require("../../models/project.model");

let getProject = async (req, res) => {
  let { q, sort, page = 1, limit = 10 } = req.query;
  // Optimized logic
  try {
    let query = q
      ? {
          $or: [
            { projectName: new RegExp(q, "i") },
            { reason: new RegExp(q, "i") },
            { type: new RegExp(q, "i") },
            { division: new RegExp(q, "i") },
            { category: new RegExp(q, "i") },
            { priority: new RegExp(q, "i") },
            { department: new RegExp(q, "i") },
            { location: new RegExp(q, "i") },
            { status: new RegExp(q, "i") },
          ],
        }
      : {};

    let totalData = await Project.find(query);
    let result = await Project.find(query)
      .sort(sort ? { [sort]: 1 } : {})
      .limit(limit)
      .skip((page - 1) * limit);

    return res
      .status(200)
      .send({ status: true, result, total: totalData.length });
  } catch (error) {
    res.status(404).send({ status: false, message: "Something went wrong" });
  }
};

module.exports = getProject;
