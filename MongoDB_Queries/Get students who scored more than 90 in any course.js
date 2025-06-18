db.marks.aggregate([
    { $match: { marks_obtained: { $gt: 90 } } },
    {
      $lookup: {
        from: "students",
        localField: "student_id",
        foreignField: "_id",
        as: "student"
      }
    },
    { $unwind: "$student" },
    { $project: { _id: 0, name: "$student.name", marks: "$marks_obtained" } }
  ]);