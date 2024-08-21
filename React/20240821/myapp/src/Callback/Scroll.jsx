import React, { useCallback, useState } from 'react';

const Scroll = () => {
  const [data, setData] = useState([]);
  const [fetchData, setFetchData] = useState([]);
  const handleFetch = useCallback(() => {
    setData(prev => [...prev, fetchData])
  }, [fetchData])

  const handleScroll = (e) => {
    // 스크롤이 화면의 맨 밑에 도달했을때
    if (true) { 
      setFetchData()
      handleFetch();
    }
  }

  return (
    <div onScroll={handleScroll}>
      {data.map(e => <div>e.name</div>)}
    </div>
  )
}

export default Scroll;