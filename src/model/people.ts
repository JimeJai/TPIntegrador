import { getData } from "../dataBase";

async function getCharacters() {
  const personajes = await getData("people");
  return personajes.results;
}
//getCharacters();

export { getCharacters };
