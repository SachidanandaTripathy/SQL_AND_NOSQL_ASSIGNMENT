db.enrollments.aggregate([
    { $match: { student_id: ObjectId("684421ab3474c75ce7f7caf9") } },
    {
      $lookup: {
        from: "courses",
        localField: "course_id",
        foreignField: "_id",
        as: "course_info"
      }
    },
    { $unwind: "$course_info" },
    { $project: { _id: 0, course: "$course_info.name", credits: "$course_info.credits" } }
  ]);
  