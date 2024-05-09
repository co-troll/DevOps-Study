// console.log(document); // html
// // DOM 객체

// // id btn 요소를 호출
// document.getElementById("btn");

// // id 아이디가 btn으로 작성한 요소가 있으면 그 요소를 참조한다.

// // class
// // querySelector 전달한 인자의 조건에 맞는 요소 하나
// console.log(document.querySelector(".btn"));

// console.log(document.querySelectorAll(".btn"));

class Popup {
    constructor (_popupWrap) {
        this.popupWrap = _popupWrap;
    }

    setPopupOpen() {
        // classList 요소에 가지고 있는 모든 클래스의 리스트
        // contains 클래스를 가지고 있는지 확인 === true false
        if (this.popupWrap.classList.contains("is-active")) {
            // true 클래스를 가지고 있으니까
            // 팝업이 켜져 있다는 말
            this.popupWrap.classList.remove("is-active");
        }
        else {
            // false 클래스를 추가
            this.popupWrap.classList.add("is-active");
        }
    }

}

let popup = new Popup(document.querySelector(".popup-wrap"));
console.log(popup);
popup.setPopupOpen();
popup.setPopupOpen();
