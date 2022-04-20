import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { axios } from "../../lib/axios";
import { authUserInfo } from "../../store/authUserInfo";
import { loginState } from "../../store/loginState";
import { postInfo } from "../../store/postInfo";
import type { Post } from "../../types/Post";
import { SubmitBtn } from "../atoms/SubmitBtn";
import { PostArea } from "../molecures/PostArea";
import { TitleArea } from "../molecures/TitleArea";

export const PostEditForm = () => {
  const authUserStatus = useRecoilValue(loginState);
  const isLogin = authUserStatus ? authUserStatus.isLogin : false;

  const user = useRecoilValue(authUserInfo);

  const [posts, setPosts] = useRecoilState(postInfo);
  
  let params = useParams();
  const post = posts.find((post: any) => post.id == params.id)
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin || user.id !== post.user_id) {
      navigate('/', { replace: true });
    }
  }, []);
  
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Post>({
    defaultValues: {
      title: `${post.title}`,
      body: `${post.body}`,
      user_id: `${post.user.id}`,
    }
  });

  const onSubmit: SubmitHandler<Post> = async (data) => {
    try {
      await axios.patch(`http://localhost:8080/api/posts/${params.id}/update`, { title: data.title, body: data.body, user_id: data.user_id });
      const res = await axios.get('http://localhost:8080/api/posts');
      setPosts(res.data);
      navigate("/", { replace: true });
    } catch (error: any) {
      console.log(error.response);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <dl>
        <input type="hidden" {...register("user_id")} name="user_id" />
        <TitleArea register={register} />
        <p className="text-red-500">{errors.title?.message}</p>
        <PostArea register={register} />
        <p className="text-red-500">{errors.body?.message}</p>
        <SubmitBtn>更新する</SubmitBtn>
      </dl>
    </form>
  )
};