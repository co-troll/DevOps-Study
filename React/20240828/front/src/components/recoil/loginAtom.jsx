import { atom, selector } from 'recoil';

export const User = atom({
  key: "User",
  default: {
    id: ""
  }
})

export const UserState = selector({
  key: "UserState",
  get: async ({ get }) => {
    const data = await new Promise(async (res, rej) => {
      
    })
  }
})