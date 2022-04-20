import type { FC } from "react";
import { Label } from "../atoms/Label";
import { NameInput } from "../atoms/NameInput";

export const NameArea: FC<any> = ({ register }) => {
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