SELECT student_id, COUNT(course_id) AS total_enrollments
FROM enrollment
GROUP BY student_id
HAVING COUNT(course_id) > 3;
