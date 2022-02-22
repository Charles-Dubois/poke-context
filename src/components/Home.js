import { useEffect, useState } from "react";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [randomNumber, setRandomNumber] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
      .then((res) => res.json())
      .then((res) => setPokemon(res))
      .catch((err) => console.log(err));
  }, [randomNumber]);

  const ChangeRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  };

  return pokemon ? (
    <>
      <button onClick={ChangeRandomNumber}>Click me!</button>
      <p>Name : {pokemon.name}</p>
      <p>Height :{pokemon.height}</p>
      <p>Weight : {pokemon.weight}</p>
    </>
  ) : (
    <span>Loading ...</span>
  );
}
