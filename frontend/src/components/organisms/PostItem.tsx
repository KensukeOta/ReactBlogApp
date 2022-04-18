import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authUserInfo } from "../../store/authUserInfo";

export const PostItem = (props: any) => {
  const user = useRecoilValue(authUserInfo);
  
  return (
    <li className="border p-2">
      <Link to={`/posts/${props.post.id}`}><h1 className="font-bold">{props.post.title}</h1></Link>
      <nav className="flex justify-between">
        <p>by {props.post.user.name}</p>
        {user.id === props.post.user_id ? <Link to={`/posts/${props.post.id}/edit`}>更新する</Link>: null}
      </nav>
    </li>
  );
};