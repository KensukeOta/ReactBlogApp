import type { PostRegisterProps } from "../../types/PostRegisterProps";
import { Label } from "../atoms/Label";
import { TitleInput } from "../atoms/TitleInput";

export const TitleArea = ({ register }: PostRegisterProps) => {
  return (
    <>
      <dt>
        <Label for="title">タイトル</Label>
      </dt>
      <dd>
        <TitleInput register={register} />
      </dd>
    </>
  );
};