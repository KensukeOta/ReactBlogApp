import { Label } from "../atoms/Label";
import { PasswordConfirmInput } from "../atoms/PasswordConfirmInput";

export const PasswordConfirmArea = ({ register, getValues }: any) => {
  return (
    <>
      <dt>
        <Label for="password_confirmation">パスワード確認用</Label>
      </dt>
      <dd>
        <PasswordConfirmInput register={register} getValues={getValues} />
      </dd>
    </>
  );
};