const Project = require("../../models/project.model");

let getOverview = async (req, res) => {
  let cusrrentDate = Date.now();
  try {
    let project = await Project.aggregate([
      // Calculate counts for each status category
      {
        $group: {
          _id: null,
          totalCount: { $sum: 1 },
          closedCount: {
            $sum: {
              $cond: [{ $eq: ["$status", "Closed"] }, 1, 0],
            },
          },
          runningCount: {
            $sum: {
              $cond: [{ $eq: ["$status", "Running"] }, 1, 0],
            },
          },
          cancelledCount: {
            $sum: {
              $cond: [{ $eq: ["$status", "Cancelled"] }, 1, 0],
            },
          },
          delayedCount: {
            $sum: {
              $cond: [
                {
                  $and: [
                    { $eq: ["$status", "Running"] },
                    { $lt: ["$endDate", cusrrentDate] },
                  ],
                },
                1,
                0,
              ],
            },
          },
        },
      },
    ]);
    return res
      .status(200)
      .send({ status: true, project: project[0] });
  } catch (error) {
    console.log(error);
    res.status(404).send({ status: false, message: "Error" });
  }
};

module.exports = getOverview;
