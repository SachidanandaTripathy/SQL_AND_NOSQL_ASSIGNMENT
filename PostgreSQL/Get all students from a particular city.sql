SELECT s.*
FROM student s
JOIN address a ON s.id = a.student_id
WHERE a.city = 'Bangalore';
