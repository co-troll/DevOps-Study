const input = document.querySelector(".uid");
const inputBtn = document.querySelector(".uid-btn");
console.log(input.value);
inputBtn.onclick = function (e) {
    const _value = input.value;
    console.log(_value);
};
