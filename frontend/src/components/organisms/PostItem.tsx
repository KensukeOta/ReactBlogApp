export const PostItem = (props: any) => {
  return (
    <li className="border p-2">
      <h1 className="font-bold">{props.post.title}</h1>
      by {props.post.user.name}
    </li>
  );
};