import type { FC } from "react";
import { LoginForm } from "../organisms/LoginForm";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Login: FC = () => {
  return (
    <DefaultLayout>
      <h1 className="font-bold">ログインフォーム</h1>
      <LoginForm />
    </DefaultLayout>
  );
};