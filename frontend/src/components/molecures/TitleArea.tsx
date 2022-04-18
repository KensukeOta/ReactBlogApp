import { Label } from "../atoms/Label";
import { TitleInput } from "../atoms/TitleInput";

export const TitleArea = ({ register }: any) => {
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