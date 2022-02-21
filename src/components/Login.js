import { useForm } from "react-hook-form";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("username", {
          required: "this is required",
          maxLength: {
            value: 15,
            message: "15 charaters max",
          },
        })}
        placeholder="Username"
      />
      {<span>{errors.username?.message}</span>}

      <input
        {...register("password", {
          required: "this is required",
          minLength: {
            value: 6,
            message: "6 charaters mininmum",
          },
        })}
        placeholder="Password"
        type="password"
      />
      {<span>{errors.password?.message}</span>}

      <input type="submit" />
    </form>
  );
}
