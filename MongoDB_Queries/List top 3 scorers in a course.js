db.marks.find({ course_id: ObjectId("COURSE_ID") })
  .sort({ marks_obtained: -1 })
  .limit(3);