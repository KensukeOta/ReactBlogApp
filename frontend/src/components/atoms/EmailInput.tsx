export const EmailInput = ({ register }: any) => {
  return (
    <input type="email" {...register("email", { required: "入力してください" })} name="email" id="email" placeholder="メールアドレス" className="border" />
  );
};