db.enrollments.aggregate([
    { $group: { _id: "$student_id", course_count: { $sum: 1 } } },
    {
      $lookup: {
        from: "students",
        localField: "_id",
        foreignField: "_id",
        as: "student"
      }
    },
    { $unwind: "$student" },
    { $project: { name: "$student.name", course_count: 1 } }
  ]);