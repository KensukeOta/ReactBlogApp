import type { FC } from "react";
import type { User } from "../../types/User";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { axios } from "../../lib/axios";
import { authUserInfo } from "../../store/authUserInfo";
import { loginState } from "../../store/loginState";

export const LogoutBtn: FC = () => {
  const [authUserStatus, setAuthUserStatus] = useRecoilState<User>(loginState);

  const setUser = useSetRecoilState<User | string>(authUserInfo);
  
  const navigate = useNavigate();

  const logout = async () => {
    await axios.get('http://localhost:8080/sanctum/csrf-cookie');
    await axios.post('http://localhost:8080/logout');
    navigate('/login', { replace: true });
    setAuthUserStatus({ isLogin: !authUserStatus.isLogin });
    setUser("");
  };
  
  return (
    <button onClick={logout}>ログアウト</button>
  );
};