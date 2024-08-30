const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const Item = [
    { id: 1, title: "soon1" },
    { id: 2, title: "soon2" },
    { id: 3, title: "soon3" },
    { id: 4, title: "soon4" },
    { id: 5, title: "soon5" },
    { id: 6, title: "soon6" },
    { id: 7, title: "soon7" },
    { id: 8, title: "soon8" },
    { id: 9, title: "soon9" },
    { id: 10, title: "soon10" },
]

// 보여주는 글의 개수
const pageViewCount = 2;

app.get('/page/:pageIndex', (req, res) => {
    const { pageIndex } = req.params;
    console.log(pageIndex);
    
    // pageIndex
    const index = parseInt(pageIndex);

    // 페이지 번호에 해당하는 시작 인덱스 계산
    // startIndex : 글의 배열에서 잘라야하느 시작점 인덱스
    const startIndex = (index - 1) * pageViewCount;

    const pageItem = Item.slice(startIndex, startIndex + pageViewCount);

    console.log(pageItem);

    res.send(pageItem);
})

app.listen(4000, () => {
    console.log("server on~");
})