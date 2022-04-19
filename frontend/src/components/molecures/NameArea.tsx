import type { UserRegisterProps } from "../../types/UserRegisterProps";
import { Label } from "../atoms/Label";
import { NameInput } from "../atoms/NameInput";

export const NameArea = ({ register }: UserRegisterProps) => {
  return (
    <>
      <dt>
        <Label for="name">名前</Label>
      </dt>
      <dd>
        <NameInput register={register} />
      </dd>
    </>
  );
};