import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { axios } from "../../lib/axios";
import { authUserInfo } from "../../store/authUserInfo";
import { loginState } from "../../store/loginState";
import { SubmitBtn } from "../atoms/SubmitBtn";
import { EmailArea } from "../molecures/EmailArea";
import { PasswordArea } from "../molecures/PasswordArea";

export const LoginForm = () => {
  const [error, setError] = useState();
  
  const [authUserStatus, setAuthUserStatus] = useRecoilState(loginState);
  const isLogin = authUserStatus ? authUserStatus.isLogin : false;

  const setUser = useSetRecoilState(authUserInfo);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (data: any) => {
    try {
      await axios.get('http://localhost:8080/sanctum/csrf-cookie');
      const res = await axios.post('http://localhost:8080/login', { email: data.email, password: data.password });
      navigate('/', { replace: true });
      setAuthUserStatus({ isLogin: !authUserStatus.isLogin });
      setUser(res.data);
    } catch (error: any) {
      setError(error.response.data.message);
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <dl>
        <p className="text-red-500">{error}</p>
        <EmailArea register={register} />
        <p className="text-red-500">{errors.email?.message}</p>
        <PasswordArea register={register} />
        <p className="text-red-500">{errors.password?.message}</p>
        <SubmitBtn>ログイン</SubmitBtn>
      </dl>
    </form>
  );
};