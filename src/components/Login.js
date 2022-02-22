// use history
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../App";
import { useContext } from "react";

export default function Login() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // got to home
    history.push("/");
    console.log(data);
  };

  const loggedInState = useContext(UserContext);
  const setAuth = () => {
    loggedInState.setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    loggedInState.setIsLoggedIn(false);
  };

  //   loggedInState.setIsLoggedIn
  //   <button className="button" onClick={onSubmit}>Log out </button>
  // <input type="submit" value="Log in" />

  return loggedInState.isLoggedIn ? (
    <button className="button" onClick={handleLogOut}>
      Log out
    </button>
  ) : (
    <form onSubmit={handleSubmit(setAuth)}>
      <input
        {...register("username", {
          required: "this is required",
          maxLength: {
            value: 15,
            message: "15 charaters max",
          },
        })}
        placeholder="Username"
        type="text"
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
