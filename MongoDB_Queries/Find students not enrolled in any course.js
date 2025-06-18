db.students.aggregate([
    {
      $lookup: {
        from: "enrollments",
        localField: "_id",
        foreignField: "student_id",
        as: "enrollments"
      }
    },
    { $match: { enrollments: { $eq: [] } } },
    { $project: { name: 1, email: 1 } }
  ]);