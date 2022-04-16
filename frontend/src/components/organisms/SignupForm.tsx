import { useForm } from "react-hook-form";
import { SubmitBtn } from "../atoms/SubmitBtn";
import { EmailArea } from "../molecures/EmailArea";
import { NameArea } from "../molecures/NameArea";
import { PasswordArea } from "../molecures/PasswordArea";
import { PasswordConfirmArea } from "../molecures/PasswordConfirmArea";

export const SignupForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
  });

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {

    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <dl>
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