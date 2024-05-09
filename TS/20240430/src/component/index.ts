function useStateCreate() {
    let state = undefined;
    return (newState) => {
        // 초기값을 할당하게 하고 싶어서 작성한 조건문
        if (state === undefined) state = newState;
        const setState = (newState) => {
            // 상태 변수를 업데이트 한다
            state = newState;
        } 
        return [state, setState];
    }
}
// [상태값][상태값을 변경하기 위한 함수]

const useState = useStateCreate();

// 상태를 가지고 있고 html내용까지 반환해주는 함수
// 상태 전환 메서들도 가지고 있고
function Content() {
    const [count, setCount] = useState(0);

    (window as any).increment = () => setCount(count + 1);

    return `
        <div class="content">
            <span>카운터 : ${count}</span>
            <button onclick="increment()">증가</button>
        </div>
    `
}

function render() {
    const app = document.querySelector("#app");
    app.innerHTML = Content();
}

render();