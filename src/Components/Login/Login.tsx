import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import styles from "../Login/Login.module.scss"

interface ILogin {
  email: String;
  password: String;
}

export default function App() {
  const navigation = useNavigate();
  const { register, handleSubmit } = useForm<ILogin>();
  const onSubmit: SubmitHandler<ILogin> = data => navigation("dashboard");

  return (<div className={styles.login} >
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input {...register("email")} />
      <label>Password</label>
      <input {...register("password")} /><br/>
      <input type="submit" />
    </form>
    </div>
  );
}
