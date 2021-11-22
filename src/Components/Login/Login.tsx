import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

interface ILogin {
  email: String;
  password: String;
}

export default function App() {
  const navigation = useNavigate();
  const { register, handleSubmit } = useForm<ILogin>();
  const onSubmit: SubmitHandler<ILogin> = data => navigation("dashboard");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input {...register("email")} />
      <label>Password</label>
      <input {...register("password")} />
      <input type="submit" />
    </form>
  );
}
