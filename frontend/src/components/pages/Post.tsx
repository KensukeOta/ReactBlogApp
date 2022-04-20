import type { FC } from "react";
import { PostForm } from "../organisms/PostForm";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Post: FC = () => {
  return (
    <DefaultLayout>
      <h1 className="font-bold">投稿フォーム</h1>
      <PostForm />
    </DefaultLayout>
  );
};