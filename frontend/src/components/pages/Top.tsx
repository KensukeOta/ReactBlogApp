import { useRecoilValue } from "recoil";
import { loginState } from "../../store/loginState";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Top = () => {
  const authUserStatus = useRecoilValue(loginState);
  const isLogin = authUserStatus ? authUserStatus.isLogin : false;
  console.log(isLogin)
  
  return (
    <DefaultLayout>
      <h1>トップページ</h1>
      <p>ログイン状態: {`${isLogin}`}</p>
      <p>Welcome! {isLogin ? '' : 'stranger'}</p>
    </DefaultLayout>
  );
};