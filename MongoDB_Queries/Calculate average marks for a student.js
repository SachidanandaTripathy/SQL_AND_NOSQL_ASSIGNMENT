db.marks.aggregate([
    { $match: { student_id: ObjectId("STUDENT_ID") } },
    {
      $group: {
        _id: "$student_id",
        avg_marks: { $avg: "$marks_obtained" }
      }
    }
  ]);