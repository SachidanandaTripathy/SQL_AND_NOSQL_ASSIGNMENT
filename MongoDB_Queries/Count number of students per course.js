db.enrollments.aggregate([
    { $group: { _id: "$course_id", student_count: { $sum: 1 } } },
    {
      $lookup: {
        from: "courses",
        localField: "_id",
        foreignField: "_id",
        as: "course"
      }
    },
    { $unwind: "$course" },
    { $project: { _id: 0, course: "$course.name", student_count: 1 } }
  ]);