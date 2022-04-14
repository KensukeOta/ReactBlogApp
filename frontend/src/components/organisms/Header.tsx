import { LinkBtn } from "../atoms/LinkBtn";

export const Header = () => {
  return (
    <header className="flex justify-between border-b">
      <LinkBtn path="/">
        <h1>
          ReactBlogApp
        </h1>
      </LinkBtn>

      <nav>
        <LinkBtn path="/signup">新規登録</LinkBtn>
        <LinkBtn path="/login">ログイン</LinkBtn>
      </nav>
    </header>
  );
};