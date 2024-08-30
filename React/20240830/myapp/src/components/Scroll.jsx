import React, { useEffect } from 'react';

// hooks 폴더에 useScroll.jsx 내용
const useScrollEnd = (onScrollToEnd) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
        onScrollToEnd();
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [onScrollToEnd])
}

const Scroll = () => {
  useScrollEnd(() => console.log("스크롤 끝남"));

  return (
    <div className='scroll-content'>
      
    </div>
  )
}

export default Scroll;