import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import styles from "../Login/Login.module.scss"
import { ILogin } from "./Login.types";

const Login = () => {
  const navigation = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<ILogin>();
  const onSubmit: SubmitHandler<ILogin> = data => navigation("dashboard");
  return (<div className={styles.login} >
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input {...register("email", { required: "Email is Required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Enter a valid Email" } })} />
      {errors.email && <span>{(errors.email as any).message}</span>}
      <label>Password</label>
      <input {...register("password", { required: "Password is Required", pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, message: "Password Should be in this Form ex. Example@12" } })} />
      {errors.password && <span>{(errors.password as any).message}</span>}
      <input type="submit" />
    </form>
  </div>
  )
}

export default Login