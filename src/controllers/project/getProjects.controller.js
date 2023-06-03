const Project = require("../../models/project.model");

let getProject = async (req, res) => {
  let { q, sort, page = 1, limit = 10 } = req.query;
  let result;
  let regex;
  let totalData;
  try {
    if (q && sort) {
      regex = new RegExp(q, "i");
      totalData = await Project.find({
        $or: [
          { projectName: regex },
          { reason: regex },
          { type: regex },
          { division: regex },
          { category: regex },
          { priority: regex },
          { department: regex },
          { location: regex },
          { status: regex },
        ],
      });
      result = await Project.find({
        $or: [
          { projectName: regex },
          { reason: regex },
          { type: regex },
          { division: regex },
          { category: regex },
          { priority: regex },
          { department: regex },
          { location: regex },
          { status: regex },
        ],
      })
        .sort({ [sort]: 1 })
        .limit(limit)
        .skip((page - 1) * limit);
    } else if (q) {
      regex = new RegExp(q, "i");
      totalData = await Project.find({
        $or: [
          { projectName: regex },
          { reason: regex },
          { type: regex },
          { division: regex },
          { category: regex },
          { priority: regex },
          { department: regex },
          { location: regex },
          { status: regex },
        ],
      });
      result = await Project.find({
        $or: [
          { projectName: regex },
          { reason: regex },
          { type: regex },
          { division: regex },
          { category: regex },
          { priority: regex },
          { department: regex },
          { location: regex },
          { status: regex },
        ],
      })
        .limit(limit)
        .skip((page - 1) * limit);
    } else if (sort) {
      totalData = await Project.find();
      result = await Project.find()
        .sort({ [sort]: 1 })
        .limit(limit)
        .skip((page - 1) * limit);
    } else {
      totalData = await Project.find();
      result = await Project.find()
        .limit(limit)
        .skip((page - 1) * limit);
    }

    return res
      .status(200)
      .send({ status: true, result, total: totalData.length });
  } catch (error) {
    res.status(404).send({ status: false, message: "Somethinf went wrong" });
  }
};

module.exports = getProject;
