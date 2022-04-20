import type { FC } from "react";
import { Label } from "../atoms/Label";
import { PasswordInput } from "../atoms/PasswordInput";

export const PasswordArea: FC<any> = ({ register }) => {
  return (
    <>
      <dt>
        <Label for="password">パスワード</Label>
      </dt>
      <dd>
        <PasswordInput register={register} />
      </dd>
    </>
  );
};