import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const authUserInfo = atom({
  key: "authUserInfo",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
