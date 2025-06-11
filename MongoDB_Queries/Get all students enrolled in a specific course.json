db.enrollments.aggregate([
    { $match: { course_id: ObjectId("684421c93474c75ce7f7cb01") } },
    {
      $lookup: {
        from: "students",
        localField: "student_id",
        foreignField: "_id",
        as: "student_info"
      }
    },
    { $unwind: "$student_info" },
    { $project: { _id: 0, student: "$student_info.name", email: "$student_info.email" } }
  ]);
  