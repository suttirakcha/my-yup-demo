import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { heroSchema } from "../schemas/heroSchema";

const initialValues = {
  heroCode: "",
  email: "",
  password: "",
  confirmPassword: "",
  age: "",
  class: "",
  terms: false,
};

const CLASSES = ["Warrior", "Mage", "Thief"];

function HeroForm() {
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
    mode: "onTouched",
    defaultValues: initialValues,
    resolver: yupResolver(heroSchema),
    shouldFocusError: true,
  });

  const onSubmit = (data) => {
    alert("You've been chosen!");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className={styles.divInput}>
        <label>Hero Code:</label>
        <input {...register("heroCode")} className={styles.input} />
        {errors.heroCode && (
          <p className={styles.textError}>{errors.heroCode?.message}</p>
        )}
      </div>
      <div className={styles.divInput}>
        <label>Eagle Guild ID:</label>
        <input {...register("email")} className={styles.input} />
        {errors.email && (
          <p className={styles.textError}>{errors.email?.message}</p>
        )}
      </div>
      <div className={styles.divInput}>
        <label>Secret Code:</label>
        <input
          {...register("password")}
          className={styles.input}
          type="password"
        />
        {errors.password && (
          <p className={styles.textError}>{errors.password?.message}</p>
        )}
      </div>
      <div className={styles.divInput}>
        <label>Repeat Code:</label>
        <input
          {...register("confirmPassword")}
          className={styles.input}
          type="password"
        />
        {errors.confirmPassword && (
          <p className={styles.textError}>{errors.confirmPassword?.message}</p>
        )}
      </div>
      <div className={styles.divInput}>
        <label>Hero Age:</label>
        <input {...register("age")} className={styles.input} />
        {errors.age && (
          <p className={styles.textError}>{errors.age?.message}</p>
        )}
      </div>
      <div className={styles.divInput}>
        <label>Hero Class:</label>
        <select {...register("class")} className={styles.input}>
          {CLASSES.map((cls) => (
            <option key={cls}>{cls}</option>
          ))}
        </select>
        {errors.class && (
          <p className={styles.textError}>{errors.class?.message}</p>
        )}
      </div>
      <div className={styles.divInput}>
        <label>Swear Allegiance to the Guild:</label>
        <input type="checkbox" {...register("terms")} />
        {errors.terms && (
          <p className={styles.textError}>{errors.terms?.message}</p>
        )}
      </div>
      <button type="submit">Join Guild</button>
    </form>
  );
}

export default HeroForm;
