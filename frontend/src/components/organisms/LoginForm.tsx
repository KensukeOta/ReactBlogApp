import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { axios } from "../../lib/axios";
import { authUserInfo } from "../../store/authUserInfo";
import { loginState } from "../../store/loginState";
import type { IFormInput } from "../../types/IFormInput";
import { SubmitBtn } from "../atoms/SubmitBtn";
import { EmailArea } from "../molecures/EmailArea";
import { PasswordArea } from "../molecures/PasswordArea";

export const LoginForm = () => {
  const [error, setError] = useState<string>();
  
  const [authUserStatus, setAuthUserStatus] = useRecoilState(loginState);
  const isLogin = authUserStatus ? authUserStatus.isLogin : false;

  const setUser = useSetRecoilState(authUserInfo);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate('/', { replace: true });
    }
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<IFormInput>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
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