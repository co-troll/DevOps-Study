class Popup {
    /** @type {HTMLDivElement} */
    popup = null;
    text = "";
    constructor(text) {
        this.text = text;
        this.init();
    }

    init() {
        const bg = document.createElement("div");
        const popupWrap = document.createElement("div");
        const popupBody = document.createElement("div");
        const popupHeader = document.createElement("div");
        const popupContent = document.createElement("p");
        const popupBtnLine = document.createElement("div");
        const popupBtn01 = document.createElement("button");
        const popupBtn02 = document.createElement("button");
        
        bg.classList.add("popup-background");
        popupWrap.classList.add("popup-wrap");
        popupBody.classList.add("popup-body");
        popupHeader.classList.add("popup-header");
        popupBtnLine.classList.add("popup-btn-line");

        popupContent.innerHTML = this.text;
        popupBtn01.innerHTML = "확인";
        popupBtn02.innerHTML = "취소";

        bg.append(popupWrap);
        popupWrap.append(popupHeader, popupBody, popupBtnLine);
        popupBody.append(popupContent);
        popupBtnLine.append(popupBtn01, popupBtn02);
        document.body.append(bg);
        this.popup = bg;
    }

    open() {
        if (!this.popup.classList.contains("is-active"))
            this.popup.classList.add("is-active");
        this.popup.onclick = (e) => {
            if (e.target == this.popup)
                this.close();
        }
    }

    addEventListener(handler, handler2) {
        const [btn01, btn02] = this.popup.querySelectorAll(".popup-btn-line > button");
        btn01.onclick = () => { handler(); this.close() };
        btn02.onclick = () => { handler2(); this.close() };
    }

    close=() => {
        if (this.popup.classList.contains("is-active"))
            this.popup.classList.remove("is-active");
    }
}
