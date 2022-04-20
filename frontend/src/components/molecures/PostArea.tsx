import type { FC } from "react";
import { Label } from "../atoms/Label";
import { PostInput } from "../atoms/PostInput";

export const PostArea: FC<any> = ({ register }) => {
  return (
    <>
      <dt>
        <Label for="body">本文</Label>
      </dt>
      <dd>
        <PostInput register={register} />
      </dd>
    </>
  );
};