import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { axios } from "../../lib/axios";
import { authUserInfo } from "../../store/authUserInfo";
import { loginState } from "../../store/loginState";

export const LogoutBtn = () => {
  const [authUserStatus, setAuthUserStatus] = useRecoilState(loginState);

  const setUser = useSetRecoilState(authUserInfo);
  
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