SELECT EXISTS (
    SELECT 1
    FROM enrollment
    WHERE student_id = 1 AND course_id = 101
) AS is_enrolled;
