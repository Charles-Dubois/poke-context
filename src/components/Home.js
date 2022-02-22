import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [randomNumber, setRandomNumber] = useState(1);
  const loggedInState = useContext(UserContext);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
      .then((res) => res.json())
      .then((res) => setPokemon(res))
      .catch((err) => console.log(err));
  }, [randomNumber]);
  // History part
  const history = useHistory();
  const onSubmit = () => {
    history.push("/login");
  };

  const handleCLick = () => {
    setRandomNumber(Math.floor(Math.random() * 876) + 1);
  };
  if (loggedInState.isLoggedIn) {
    return pokemon ? (
      <>
        <button onClick={handleCLick}>Click me!</button>
        <p>Name : {pokemon.name}</p>
        <p>Height :{pokemon.height}</p>
        <p>Weight : {pokemon.weight}</p>
        {/* <p>{pokemon.types[0].type.name}</p> */}
      </>
    ) : (
      <span>Loading ...</span>
    );
  } else {
    return <Link to="/login">Login</Link>;
  }
}
