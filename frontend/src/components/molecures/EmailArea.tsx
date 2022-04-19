import type { UserRegisterProps } from "../../types/UserRegisterProps";
import { EmailInput } from "../atoms/EmailInput";
import { Label } from "../atoms/Label";

export const EmailArea = ({ register }: UserRegisterProps) => {
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