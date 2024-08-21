class App extends React.Component {
  constructor(props) {
    super(props);
    // 상태변수 초기화
    this.state = {
      login : false,
      count : 0
    }
  }

  componentDidMount() {
    // 상태가 변한 이후에 호출
    // 최초에 한번 호출
    this.setState({...this.state, login : true})
    
  }
  
  componentDidUpdate() {
    // 상태가 변한 이후에 호출
    // 상태가 변할때마다 호출
    
  }
  
  componentWillUnmount() {
    // 상태가 변한 이후에 호출
    // 컴포넌트가 화면에서 보이지 않게 되었을때
  }

  render() {
    return <></>
  }
}



<App login={true}/>