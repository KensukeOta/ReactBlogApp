import type { FC } from "react";
import type { Props } from "../../types/Props";

export const SubmitBtn: FC<Props> = (props) => {
  return (
    <button type="submit" className="border">{props.children}</button>
  );
};