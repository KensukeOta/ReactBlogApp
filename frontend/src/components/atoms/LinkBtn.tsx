import type { FC } from "react";
import type { Props } from "../../types/Props";
import { Link } from "react-router-dom";

export const LinkBtn: FC<Props> = (props) => {
  return (
    <Link to={props.path!} className={props.className}>
      {props.children}
    </Link>
  );
};