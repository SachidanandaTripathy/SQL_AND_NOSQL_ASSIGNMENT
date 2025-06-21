SELECT student_id, AVG(score) AS average_score
FROM marks
GROUP BY student_id;
