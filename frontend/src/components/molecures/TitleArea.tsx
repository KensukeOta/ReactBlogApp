import type { FC } from "react";
import { Label } from "../atoms/Label";
import { TitleInput } from "../atoms/TitleInput";

export const TitleArea: FC<any> = ({ register }) => {
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