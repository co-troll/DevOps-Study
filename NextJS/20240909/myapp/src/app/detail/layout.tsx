const layout = ({ children } : {
  children : React.ReactNode
}) => {
  return (
    <>
      <div>헤더</div>
      <div>
        {children}
      </div>
      <div>푸터</div>
    </>
  );
}

export default layout;