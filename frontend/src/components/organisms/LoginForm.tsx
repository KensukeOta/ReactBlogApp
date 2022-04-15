import { useForm } from "react-hook-form";
import { SubmitBtn } from "../atoms/SubmitBtn";
import { EmailArea } from "../molecures/EmailArea";
import { PasswordArea } from "../molecures/PasswordArea";

export const LoginForm = () => {
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
    console.log(data);
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <dl>
        <EmailArea register={register} />
        <p className="text-red-500">{errors.email?.message}</p>
        <PasswordArea register={register} />
        <p className="text-red-500">{errors.password?.message}</p>
        <SubmitBtn>ログイン</SubmitBtn>
      </dl>
    </form>
  );
};