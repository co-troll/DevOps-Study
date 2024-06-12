use soon;
CREATE TABLE board (
    id VARCHAR(10) PRIMARY KEY,
    content TEXT,
    title VARCHAR(20) NOT NULL,
    author VARCHAR(10),
    likes INTEGER DEFAULT 0,
    view INTEGER DEFAULT 0
);

# 추가
INSERT INTO board(id, content, title, author) VALUES ("1","내용1", "제목1", "저자1");

# 조회
SELECT * FROM board ORDER BY id DESC;
SELECT * FROM board ORDER BY id ASC;

# 수정
UPDATE board SET title="제목1", content="내용1" WHERE id="1";

# 삭제
DELETE FROM board WHERE id="1";

DESC board;



