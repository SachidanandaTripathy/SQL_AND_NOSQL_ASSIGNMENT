db.enrollments.aggregate([
    { $group: { _id: "$student_id", count: { $sum: 1 } } },
    { $match: { count: { $gt: 3 } } },
    {
      $lookup: {
        from: "students",
        localField: "_id",
        foreignField: "_id",
        as: "student"
      }
    },
    { $unwind: "$student" },
    { $project: { _id: 0, name: "$student.name", enrollments: "$count" } }
  ]);