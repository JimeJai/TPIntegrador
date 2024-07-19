import { getData } from "../dataBase";

async function getCharacters() {
  //esta funcion en modelo
  const personajes = await getData("people");
  // console.log(personajes.results); //me da un array de objetos ( cada objeto es un personaje) deberia
  return personajes.results; // hacer un array y pushear solo los nombres y algun otro dato, podria ingresar como lo hice con el name..(?)
}
//getCharacters();

export { getCharacters };
