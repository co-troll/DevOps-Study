function useStateCreate() {
    let state = undefined;
    return (newState) => {
        if (state === undefined)
            state = newState;
        const setState = (newState) => {
            state = newState;
            render()
        };
        return [state, setState];
    };
}
const useState = useStateCreate();
function Content() {
    const [count, setCount] = useState(0);
    window.increment = () => setCount(count + 1);
    return `
        <div class="content">
            <span>카운터 : ${count}</span>
            <button onclick="increment()">증가</button>
        </div>
    `;
}
function render() {
    const app = document.querySelector("#app");
    app.innerHTML = Content();
}
render();


let line1 = (dots[1][1] - dots[0][1]) / (dots[1][0] - dots[0][0]) 
let line4 = (dots[2][1] - dots[0][1]) / (dots[2][0] - dots[0][0])
let line6 = (dots[3][1] - dots[0][1]) / (dots[3][0] - dots[0][0])
let line2 = (dots[2][1] - dots[1][1]) / (dots[2][0] - dots[1][0])
let line5 = (dots[3][1] - dots[1][1]) / (dots[3][0] - dots[1][0])
let line3 = (dots[3][1] - dots[2][1]) / (dots[3][0] - dots[2][0])

abs((dots[0][0]-dots[1][0])/(dots[0][1]-dots[1][1]))==abs((dots[2][0]-dots[3][0])/(dots[2][1]-dots[3][1]))