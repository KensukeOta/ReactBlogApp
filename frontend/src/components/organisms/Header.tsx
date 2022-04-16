import { useRecoilValue } from "recoil";
import { loginState } from "../../store/loginState";
import { LinkBtn } from "../atoms/LinkBtn";
import { LogoutBtn } from "../atoms/LogoutBtn";

export const Header = () => {
  const authUserStatus = useRecoilValue(loginState);
  const isLogin = authUserStatus ? authUserStatus.isLogin : false;

  return (
    <header className="flex justify-between border-b">
      <LinkBtn path="/">
        <h1>
          ReactBlogApp
        </h1>
      </LinkBtn>

      <nav>
        {isLogin ? null : <LinkBtn path="/signup">新規登録</LinkBtn>}
        {isLogin ? <LogoutBtn /> : <LinkBtn path="/login">ログイン</LinkBtn>}
      </nav>
    </header>
  );
};