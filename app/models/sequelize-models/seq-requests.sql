
SELECT "Tag"."id", "Tag"."name",
"quizlist"."id"  AS "quizlist.id",
"quizlist"."title"  AS "quizlist.title",
"quizlist"."description"  AS "quizlist.description",
"quizlist"."user_id"
AS "quizlist.user_id", "quizlist"."created_at"
AS "quizlist.created_at", "quizlist"."updated_at"
AS "quizlist.updated_at", "quizlist->quiz_has_tag"."created_at"
AS "quizlist.quiz_has_tag.created_at", "quizlist->quiz_has_tag"."updated_at"
AS "quizlist.quiz_has_tag.updated_at", "quizlist->quiz_has_tag"."quiz_id"
AS "quizlist.quiz_has_tag.quiz_id", "quizlist->quiz_has_tag"."tag_id"
AS "quizlist.quiz_has_tag.tag_id"
FROM "tag" AS "Tag"
LEFT OUTER JOIN ( "quiz_has_tag" AS "quizlist->quiz_has_tag"
INNER JOIN "quiz"
AS "quizlist"
ON "quizlist"."id" = "quizlist->quiz_has_tag"."tag_id")
ON "Tag"."id" = "quizlist->quiz_has_tag"."quiz_id";


-- Exemples de requêtes avec table de liaison
-- Merci Hélène !
SELECT quiz.title, tag."name"
FROM "quiz"
JOIN "quiz_has_tag"
ON quiz.id = quiz_id
JOIN "tag"
ON tag.id = tag_id
WHERE quiz.id =1
ORDER BY "title";

SELECT quiz.title, tag."name"
FROM "quiz"
JOIN "quiz_has_tag"
ON quiz.id = quiz_id
JOIN "tag"
ON tag.id = tag_id
WHERE tag.id =1
ORDER BY "title";