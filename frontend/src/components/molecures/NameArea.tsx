import { Label } from "../atoms/Label";
import { NameInput } from "../atoms/NameInput";

export const NameArea = ({ register }: any) => {
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