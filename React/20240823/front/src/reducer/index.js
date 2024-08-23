// 리듀서 함수
// 초기값을 기본으로 할당

// state
// 기본값을 할당
// 초기에는 기본값이 사용된다.
const initalState = {
    user: null
}

const reducer = (state = initalState, action) => {
    // state 초기에는 기본값으로 할당한 initalState가 할당되고
    // 상태를 없데이트한 이후에는 이전 상태값을 할당해준다.
    const { type, payload } = action;
    switch (type) {
        case "LOGIN":            
            return{ ...state, user: payload };
        case "LOGOUT":
            return{ ...state, user: null };
        default:
            return state;
    }
}

export default reducer;