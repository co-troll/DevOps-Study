import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const Detail = () => {
  const Item = [
    { count: 10, name: "이쁜 셔츠", num: "10010" },
    { count: 9, name: "벙거지 모자", num: "10001" },
    { count: 11, name: "찢어진 바지", num: "20001" }
  ]
  const [detailInfo, setDetail] = useState(null);
  const params = useParams();
  // useSearchParams 초기화 반환값이 배열의 형태
  // 파싱된 쿼리스트링의 내용. 쿼리스트링을 변경할때 사용할 메서드
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    console.log(params);
    setTimeout(() => {
      // const [item] = Item.filter((e) => e.num === params.num);
      // setDetail(item);

      // quesy string  사용
      console.log(query.get('name'));
      const name = query.get('name');
      const [item] = Item.filter((e) => e.name === name);
      setDetail(item);

    }, 2000)
  })

  if (!detailInfo) return (<div>로딩중...</div>)
  return (
    <div>
      상세페이지 <br />
      {detailInfo.name} <br />
      {detailInfo.count} 개
    </div>
  )
}

export default Detail