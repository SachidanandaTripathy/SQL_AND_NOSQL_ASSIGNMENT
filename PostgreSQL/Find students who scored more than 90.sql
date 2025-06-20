SELECT s.*
FROM student s
JOIN marks m ON s.id = m.student_id
WHERE m.score > 90;
