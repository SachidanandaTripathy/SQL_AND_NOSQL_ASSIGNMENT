SELECT student_id, SUM(score) AS total_marks
FROM marks
GROUP BY student_id;
