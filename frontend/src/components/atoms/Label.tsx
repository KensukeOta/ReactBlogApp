import { useLocation } from "react-router-dom";
import { RequiredText } from "./RequiredText";

export const Label = (props: any) => {
  const path = useLocation().pathname;

  return (
    <label htmlFor={props.for}>{props.children} {path === "/signup" ? <RequiredText /> : null}</label>
  );
};