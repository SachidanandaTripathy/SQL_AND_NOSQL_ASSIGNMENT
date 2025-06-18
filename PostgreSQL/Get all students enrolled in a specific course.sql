SELECT s.id, s.name, s.email, s.phone
FROM student s
JOIN enrollment e ON s.id = e.student_id
WHERE e.course_id = 101;
