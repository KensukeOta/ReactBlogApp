import type { FC } from "react";

export const EmailInput: FC<any> = ({ register }) => {
  return (
    <input type="email" {...register("email", { required: "入力してください" })} name="email" id="email" placeholder="メールアドレス" className="border" />
  );
};