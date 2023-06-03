const Project = require("../../models/project.model");

let getChartData = async (req, res) => {
  try {
    let project = await Project.aggregate([
      {
        $group: {
          _id: "$department",
          total: { $sum: 1 },
          closedCount: {
            $sum: { $cond: [{ $eq: ["$status", "Closed"] }, 1, 0] },
          },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);
    return res.status(200).send({ status: true, project });
  } catch (error) {
    res.status(404).send({ status: false, message: "Error" });
  }
};

module.exports = getChartData;
