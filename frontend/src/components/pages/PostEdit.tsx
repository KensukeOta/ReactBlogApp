import { PostEditForm } from "../organisms/PostEditForm";
import { DefaultLayout } from "../templates/DefaultLayout";

export const PostEdit = () => {
  return (
    <DefaultLayout>
      <h1>更新フォーム</h1>
      <PostEditForm />
    </DefaultLayout>
  );
};