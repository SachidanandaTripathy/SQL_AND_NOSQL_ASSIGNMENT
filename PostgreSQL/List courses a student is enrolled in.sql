SELECT c.id, c.name, c.description
FROM course c
JOIN enrollment e ON c.id = e.course_id
WHERE e.student_id = 1;
