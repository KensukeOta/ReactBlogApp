export const PasswordInput = ({ register }: any) => {
  return (
    <input type="password" {...register("password", { required: "入力してください" })} name="password" id="password" placeholder="パスワード" className="border" />
  );
};