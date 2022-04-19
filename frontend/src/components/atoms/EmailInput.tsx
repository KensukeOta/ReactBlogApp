import type { UserRegisterProps } from "../../types/UserRegisterProps";

export const EmailInput = ({ register }: UserRegisterProps) => {
  return (
    <input type="email" {...register("email", { required: "入力してください" })} name="email" id="email" placeholder="メールアドレス" className="border" />
  );
};