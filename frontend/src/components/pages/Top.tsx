import { useRecoilValue } from "recoil";
import { authUserInfo } from "../../store/authUserInfo";
import { loginState } from "../../store/loginState";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Top = () => {
  const authUserStatus = useRecoilValue(loginState);
  const isLogin = authUserStatus ? authUserStatus.isLogin : false;

  const user = useRecoilValue(authUserInfo);
  
  return (
    <DefaultLayout>
      <h1>トップページ</h1>
      <p>ログイン状態: {`${isLogin}`}</p>
      <p>Welcome! {user ? user.name : 'stranger'}</p>
    </DefaultLayout>
  );
};