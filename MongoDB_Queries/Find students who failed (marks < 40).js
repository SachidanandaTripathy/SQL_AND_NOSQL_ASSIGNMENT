db.marks.aggregate([
    { $match: { marks_obtained: { $lt: 40 } } },
    {
      $lookup: {
        from: "students",
        localField: "student_id",
        foreignField: "_id",
        as: "student"
      }
    },
    { $unwind: "$student" },
    { $project: { name: "$student.name", marks: "$marks_obtained" } }
  ]);