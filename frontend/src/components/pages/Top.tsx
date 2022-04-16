import { useRecoilValue } from "recoil";
import { authUserInfo } from "../../store/authUserInfo";
import { loginState } from "../../store/loginState";
import { LinkBtn } from "../atoms/LinkBtn";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Top = () => {
  const authUserStatus = useRecoilValue(loginState);
  const isLogin = authUserStatus ? authUserStatus.isLogin : false;

  const user = useRecoilValue(authUserInfo);
  
  return (
    <DefaultLayout>
      <h1 className="font-bold">トップページ</h1>
      <p>ログイン状態: {`${isLogin}`}</p>
      <p>Welcome! {user ? user.name : 'stranger'}</p>
      <nav className="text-center">
        <LinkBtn path="/posts/create" className="border">投稿する</LinkBtn>
      </nav>
    </DefaultLayout>
  );
};