export const PasswordInput = ({ register }: any) => {
  return (
    <input type="password" {...register("password", { required: "入力してください", minLength: { value: 6, message: "6文字以上30文字以内で入力してください" }, maxLength: { value: 30, message: "6文字以上30文字以内で入力してください"} })} name="password" id="password" placeholder="パスワード" className="border" />
  );
};