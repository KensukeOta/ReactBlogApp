import type { FC } from "react";
import type { PostProps } from "../../types/PostProps";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authUserInfo } from "../../store/authUserInfo";
import { EditBtn } from "../atoms/EditBtn";
import { DeleteBtn } from "../atoms/DeleteBtn";

export const PostItem: FC<PostProps> = (props) => {
  const user = useRecoilValue(authUserInfo);
  
  return (
    <li className="border p-2">
      <Link to={`/posts/${props.post.id}`}><h1 className="font-bold">{props.post.title}</h1></Link>
      <nav className="flex justify-between">
        <p>by {props.post.user!.name}</p>
        {user.id === props.post.user_id ? <EditBtn id={props.post!.id} /> : null}
        {user.id === props.post.user_id ? <DeleteBtn id={props.post!.id} /> : null}
      </nav>
    </li>
  );
};