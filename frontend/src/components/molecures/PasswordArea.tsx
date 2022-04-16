import { Label } from "../atoms/Label";
import { PasswordInput } from "../atoms/PasswordInput";

export const PasswordArea = ({ register }: any) => {
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