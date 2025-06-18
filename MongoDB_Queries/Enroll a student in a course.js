db.students.updateOne(
  { name: "John Doe" },
  {
    $push: {
      enrollments: {
        course_id: ObjectId("684421c93474c75ce7f7cb01"),
        enrollment_date: new Date("2025-06-01")
      }
    }
  }
);