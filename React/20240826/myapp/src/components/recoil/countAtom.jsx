import { atom, selector } from 'recoil';

// 스토어 생성
export const countState = atom({
  key: "count",
  default: {
    num: 0,
    name: "pageCount"
  }
})

export const boardState = atom({
  key: "board",
  default: {
    num: 0,
    name: "pageCount"
  }
})

export const paginationState = selector({
  key: "pagination",
  get: ({ get }) => {
    const { num } = get(countState);
    return `page ${num} 번째야`;
  },
  set: ({ set, get }, newState) => {
    const { num, name } = get(countState)
    set(countState, { num: num + 1, name });
  }
})

export const Login = atom({
  key: "Login",
  default: {
    uid: "",
    upw: ""
  }
})

export const LoginCheck = selector({
  key: "LoginCheck",
  get: async ({ get }) => {
    const data = await new Promise((res, rej) => {
      setTimeout(() => {
        const { uid, upw } = get(Login);
        const user = { uid: "123", upw: "456" };
        if (user.uid === uid && user.upw === upw) {
            res("로그인 성공");
          } else rej("로그인 실패");
      }, 3000)
    })

    return data;
  }
})