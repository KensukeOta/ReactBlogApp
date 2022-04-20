import type { FC } from "react";
import type { Props } from "../../types/Props";
import { useLocation } from "react-router-dom";
import { RequiredText } from "./RequiredText";

export const Label: FC<Props> = (props) => {
  const path = useLocation().pathname;

  return (
    <label htmlFor={props.for}>{props.children} {path === "/signup" ? <RequiredText /> : null}</label>
  );
};