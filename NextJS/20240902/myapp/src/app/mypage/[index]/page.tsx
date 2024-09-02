const page = ({ params, searchParams }: { params: { index: string }, searchParams: { a: string } }) => {
  return (
    <div>
      여기는 index params를 받은 test페이지
      <div>{params.index} {searchParams.a}</div>
    </div>
  )
}

export default page