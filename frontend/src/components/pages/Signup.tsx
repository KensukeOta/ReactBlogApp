import { SignupForm } from "../organisms/SignupForm";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Signup = () => {
  return (
    <DefaultLayout>
      <h1>ユーザー登録フォーム</h1>
      <SignupForm />
    </DefaultLayout>
  );
};