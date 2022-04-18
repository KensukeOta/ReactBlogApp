import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { axios } from "../../lib/axios";
import { postInfo } from "../../store/postInfo";
import { SubmitBtn } from "../atoms/SubmitBtn";
import { PostArea } from "../molecures/PostArea";
import { TitleArea } from "../molecures/TitleArea";

export const PostEditForm = () => {
  const setPost = useSetRecoilState(postInfo);
  
  let params = useParams();
  const posts = useRecoilValue(postInfo);
  const post = posts.find((post: any) => post.id == params.id)
  
  const navigate = useNavigate();
  
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: `${post.title}`,
      body: `${post.body}`,
      user_id: `${post.user.id}`,
    }
  });

  const onSubmit = async (data: any) => {
    try {
      await axios.patch(`http://localhost:8080/api/posts/${params.id}/update`, { title: data.title, body: data.body, user_id: data.user_id });
      const res = await axios.get('http://localhost:8080/api/posts');
      setPost(res.data);
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