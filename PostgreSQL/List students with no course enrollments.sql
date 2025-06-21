SELECT s.*
FROM student s
LEFT JOIN enrollment e ON s.id = e.student_id
WHERE e.course_id IS NULL;
