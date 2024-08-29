import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { createTodoList, getTodoList } from '../api/index'

const Todo = () => {
  const { data, isLoading, isError, status, refetch } = useQuery({
    queryKey: ["todo"],
    queryFn: getTodoList,
    retry: 0,
  })

  const mutation = useMutation({
    mutationFn: createTodoList,
    onSuccess: () => {
      refetch();
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name: { value: name }} = e.target;
    mutation.mutate({ id: data.length + 1, name });
  }

  if (isLoading) return (<>loading...</>);
  if (isError) return (<>에러발생!!</>);
  // key={"todo" + index} key 값을 줘야하는 이유는
  // 리액트가 리랜더링을 감지할때 key 판단을 해서그리기 때문에 key 값이 없으면
  // 자식으로 컴포넌트를 동적으로 생성하는 경우에 리랜더링이 되지않는 문제가 발생할수 있다.
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">이름</label>
        <input type="text" name='name' />
        <button>클릭</button>
      </form>
      {data.map((el, index) => <div key={"todo" + index}>{el.id} : {el.name}</div>)}
    </div>
  )
}

export default Todo