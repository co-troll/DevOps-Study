import React, { useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Count = () => {
  const { data, refetch } = useQuery({
    queryKey: ['count'], queryFn: async () => {
      return await axios.get('http://localhost:4000/count');
    },
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    enabled: false,
    retry: 10,
    select: ({ data }) => {
      console.log(data);
      return data + 1;
    },
  })

  const mutation = useMutation({
    mutationFn: async (data) => {
      return await axios.post('http://localhost:4000/count', { ...data });
    },
    onMutate: (data) => {
      // mutation 객체안에 함수를 호출해서 mutation을 호출하면
      // 매개변수로 전달한 내요을 확인할수 있다.
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
    onSettled: () => {
      // 맨 마지막에 호출 되는 내용
      console.log("123");
    },
    onSuccess: (data) => {
      console.log(data);
    }
  })

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleClick = () => {
    mutation.mutate({ incrementCount: 2 });
  }

  return (
    <div>
      <button onClick={handleClick}>클릭</button>
    </div>
  )
}

export default Count