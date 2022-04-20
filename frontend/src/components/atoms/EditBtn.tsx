import type { FC } from "react";
import type { Post } from "../../types/Post";
import { LinkBtn } from "./LinkBtn";

export const EditBtn: FC<Post> = (props) => {
  return (
    <LinkBtn path={`/posts/${props.id}/edit`} className="text-green-500">更新する</LinkBtn>
  );
};