import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { postInfo } from "../../store/postInfo";
import { DefaultLayout } from "../templates/DefaultLayout";

export const PostContent: FC = () => {
  let params = useParams();
  const posts = useRecoilValue(postInfo);
  const post = posts.find((post: any) => post.id == params.id)
  
  return (
    <DefaultLayout>
      <h1 className="font-bold">{post.title}</h1>
      <p>{post.body}</p>
    </DefaultLayout>
  );
};