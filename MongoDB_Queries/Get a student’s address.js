db.students.find(
  { name: "John Doe" },
  { _id: 0, address: 1 }
);