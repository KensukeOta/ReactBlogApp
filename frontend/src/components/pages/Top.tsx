import { useRecoilValue } from "recoil";
import { authUserInfo } from "../../store/authUserInfo";
import { loginState } from "../../store/loginState";
import { postInfo } from "../../store/postInfo";
import { LinkBtn } from "../atoms/LinkBtn";
import { PostItem } from "../organisms/PostItem";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Top = () => {
  const authUserStatus = useRecoilValue(loginState);
  const isLogin = authUserStatus ? authUserStatus.isLogin : false;

  const user = useRecoilValue(authUserInfo);

  const posts = useRecoilValue(postInfo);
  
  return (
    <DefaultLayout>
      <h1 className="font-bold">トップページ</h1>
      <p>ログイン状態: {`${isLogin}`}</p>
      <p>Welcome! {user ? user.name : 'stranger'}</p>

      <nav className="text-center">
        <LinkBtn path="/posts/create" className="border">投稿する</LinkBtn>
      </nav>
      
      <ul>
        {posts.map((post: any) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </DefaultLayout>
  );
};