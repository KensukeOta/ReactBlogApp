import { Link } from "react-router-dom";

export const LinkBtn = (props: any) => {
  return (
    <Link to={props.path} className={props.className}>
      {props.children}
    </Link>
  );
};