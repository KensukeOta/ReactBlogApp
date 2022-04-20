import type { FC } from "react";
import { EmailInput } from "../atoms/EmailInput";
import { Label } from "../atoms/Label";

export const EmailArea: FC<any> = ({ register }) => {
  return (
    <>
      <dt>
        <Label for="email">メールアドレス</Label>
      </dt>
      <dd>
        <EmailInput register={register} />
      </dd>
    </>
  );
};