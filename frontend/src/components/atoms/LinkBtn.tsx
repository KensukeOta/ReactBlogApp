import { Link } from "react-router-dom";

export const LinkBtn = (props: any) => {
  return (
    <Link to={props.path}>
      {props.children}
    </Link>
  );
};