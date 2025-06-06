import { signupSchema } from "../schemas/signupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const styles = {
    divInput: "flex gap-2",
    input: "border-1 rounded-lg",
    textError: "text-red-500 font-medium",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      nickname: "",
      password: "",
      confirmPassword: "",
      age: "",
      tel: "",
      terms: false,
    },
    resolver: yupResolver(signupSchema),
    shouldFocusError: false,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <p className="text-2xl font-bold pb-10">CC 20 Signup Form</p>
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.divInput}>
          <p>
            <label>ชื่อผู้ใช้:</label>
            <input
              className={styles.input}
              type="text"
              {...register("username")}
            />
          </p>
          {errors.username && (
            <p className={styles.textError}>{errors.username.message}</p>
          )}
        </div>
        <div className={styles.divInput}>
          <p>
            <label>ชื่อเล่น:</label>
            <input
              className={styles.input}
              type="text"
              {...register("nickname")}
            />
          </p>
          {errors.nickname && (
            <p className={styles.textError}>{errors.nickname.message}</p>
          )}
        </div>

        <div className={styles.divInput}>
          <p>
            <label>รหัสผ่าน</label>
            <input
              className={styles.input}
              type="password"
              {...register("password")}
            />
          </p>
          {errors.password && (
            <p className={styles.textError}>{errors.password.message}</p>
          )}
        </div>
        <div className={styles.divInput}>
          <p>
            <label>ยืนยันรหัสผ่าน</label>
            <input
              className={styles.input}
              type="password"
              {...register("confirmPassword")}
            />
          </p>
          {errors.confirmPassword && (
            <p className={styles.textError}>{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className={styles.divInput}>
          <label>อายุ:</label>
          <input className={styles.input} type="number" {...register("age")} />
          {errors.age && (
            <p className={styles.textError}>{errors.age.message}</p>
          )}
        </div>
        <div className={styles.divInput}>
          <label>เบอร์โทร:</label>
          <input className={styles.input} type="tel" {...register("tel")} />
          {errors.tel && (
            <p className={styles.textError}>{errors.tel.message}</p>
          )}
        </div>
        <div className={styles.divInput}>
          <label>ยอมรับเงื่อนไข:</label>
          <input
            className={styles.input}
            type="checkbox"
            {...register("terms")}
          />
          {errors.terms && (
            <p className={styles.textError}>{errors.terms.message}</p>
          )}
        </div>
        <button type="submit">สมัครสมาชิก</button>
      </form>
    </>
  );
}
