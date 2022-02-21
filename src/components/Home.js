import { useEffect, useState } from "react";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => res.json())
      .then((res) => setPokemon(res))
      .then(console.log(pokemon))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (randomNumber !== 0) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        .then((res) => res.json())
        .then((res) => setPokemon(res))
        .then(console.log(pokemon))
        .catch((err) => console.log(err));
    }
  }, [randomNumber]);

  function ChangeRandomNumber() {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <>
      <button onClick={ChangeRandomNumber}>Click me!</button>
      <p>Name : {pokemon.name}</p>
      <p>Height :{pokemon.height}</p>
      <p>Weight : {pokemon.weight}</p>
    </>
  );
}
