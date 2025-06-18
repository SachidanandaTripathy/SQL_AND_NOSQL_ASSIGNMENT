db.students.aggregate([
    { $group: { _id: "$address.city", students: { $push: "$name" } } }
  ]);