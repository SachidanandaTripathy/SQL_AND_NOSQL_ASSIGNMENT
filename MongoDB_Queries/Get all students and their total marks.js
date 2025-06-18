db.marks.aggregate([
    {
      $group: {
        _id: "$student_id",
        total_marks: { $sum: "$marks_obtained" }
      }
    },
    {
      $lookup: {
        from: "students",
        localField: "_id",
        foreignField: "_id",
        as: "student"
      }
    },
    { $unwind: "$student" },
    { $project: { name: "$student.name", total_marks: 1 } }
  ]);