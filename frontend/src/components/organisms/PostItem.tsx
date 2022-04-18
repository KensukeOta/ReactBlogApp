import { Link } from "react-router-dom";

export const PostItem = (props: any) => {
  return (
    <li className="border p-2">
      <Link to={`/posts/${props.post.id}`}><h1 className="font-bold">{props.post.title}</h1></Link>
      by {props.post.user.name}
    </li>
  );
};