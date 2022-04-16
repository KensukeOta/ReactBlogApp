export const TitleInput = ({ register }: any) => {
  return (
    <input type="text" {...register("title", { required: "入力してください", maxLength: { value: 50, message: "50文字以内で入力してください"} })} name="title" id="title" placeholder="タイトル" className="border w-full" />
  );
};