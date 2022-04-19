import type { PostRegisterProps } from "../../types/PostRegisterProps";
import { Label } from "../atoms/Label";
import { PostInput } from "../atoms/PostInput";

export const PostArea = ({ register }: PostRegisterProps) => {
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