export const PasswordConfirmInput = ({ register, getValues }: any) => {
  return (
    <input type="password" {...register("password_confirmation", { required: "入力してください", validate: {message: (value: any) => value === getValues('password') ? null : "パスワードが一致しません"} })} name="password_confirmation" id="password_confirmation" placeholder="パスワード確認用" className="border" />
  );
};