import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { axios } from "../../lib/axios";
import { authUserInfo } from "../../store/authUserInfo";
import { loginState } from "../../store/loginState";
import type { User } from "../../types/User";
import { SubmitBtn } from "../atoms/SubmitBtn";
import { EmailArea } from "../molecures/EmailArea";
import { NameArea } from "../molecures/NameArea";
import { PasswordArea } from "../molecures/PasswordArea";
import { PasswordConfirmArea } from "../molecures/PasswordConfirmArea";

export const SignupForm = () => {
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
    formState: { errors },
    getValues
  } = useForm<User>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
  });

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      await axios.get('http://localhost:8080/sanctum/csrf-cookie');
      await axios.post('http://localhost:8080/api/register', { name: data.name, email: data.email, password: data.password, password_confirmation: data.password_confirmation });
      const res = await axios.post('http://localhost:8080/login', { email: data.email, password: data.password });
      navigate('/', { replace: true });
      setAuthUserStatus({ isLogin: !authUserStatus.isLogin });
      setUser(res.data);
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <dl>
        <p className="text-red-500">{error}</p>
        <NameArea register={register} />
        <p className="text-red-500">{errors.name?.message}</p>
        <EmailArea register={register} />
        <p className="text-red-500">{errors.email?.message}</p>
        <PasswordArea register={register} />
        <p className="text-red-500">{errors.password?.message}</p>
        <PasswordConfirmArea register={register} getValues={getValues}/>
        <p className="text-red-500">{errors.password_confirmation?.message}</p>
        <SubmitBtn>登録する</SubmitBtn>
      </dl>
    </form>
  );
};