import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { axios } from "../../lib/axios";
import { authUserInfo } from "../../store/authUserInfo";
import { loginState } from "../../store/loginState";
import { SubmitBtn } from "../atoms/SubmitBtn";
import { PostArea } from "../molecures/PostArea";
import { TitleArea } from "../molecures/TitleArea";

export const PostForm = () => {
  const authUserStatus = useRecoilValue(loginState);
  const isLogin = authUserStatus ? authUserStatus.isLogin : false;

  const user = useRecoilValue(authUserInfo);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate('/login', { replace: true });
    }
  }, []);
  
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: "",
      body: "",
      user_id: `${user.id}`,
    }
  });

  const onSubmit = async (data: any) => {
    try {
      await axios.post('http://localhost:8080/api/store', { title: data.title, body: data.body, user_id: data.user_id });
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
        <SubmitBtn>投稿する</SubmitBtn>
      </dl>
    </form>
  );
};