import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { axios } from "../lib/axios";

const { persistAtom } = recoilPersist();

export const postInfo = atom({
  key: "postInfo",
  default: selector({
    key: 'savedPostInfo',
    get: async ({ get }) => {
      try {
        const res = await axios('http://localhost:8080/api/posts');
        return res.data
      } catch (error) {
        console.log(error);
      }
    }
  }),
  effects_UNSTABLE: [persistAtom],
});