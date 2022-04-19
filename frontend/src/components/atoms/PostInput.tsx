import type { PostRegisterProps } from "../../types/PostRegisterProps";

export const PostInput = ({ register }: PostRegisterProps) => {
  return (
    <textarea {...register("body", { required: "入力してください", maxLength: { value: 1000, message: "1000文字以内で入力してください"} })} name="body" id="body" placeholder="本文" className="border w-full h-96"></textarea>
  );
};