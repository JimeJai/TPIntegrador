import { getCharacters } from "../model/people";
import { getData } from "../dataBase";

async function getAllPeople() {
  for (let index = 1; index < 10; index++) {
    const personas = await getData("people" + `?page=${index}&limit=10`);
    return personas.results;
  }
}

//getAllPeople();

async function getByName(name: string) {
  const personajes = await getCharacters();
  const personaje = personajes.find((objeto: any) => objeto.name == name); //solo me dejo cuando le puse any al type de perso
  // console.log(personaje.result);
  //   console.log(personaje.uid);
  if (personaje) {
    const info = await getData("people" + `/${personaje.uid}/`);
    //console.log(info.result);
    return info.result.properties;
  }
}

//getByName("Leia Organa");

async function getAllNames() {
  const personajes = await getCharacters();
  const nombres = personajes.map((objeto: any) => objeto.name);
  //console.log(nombres);
  return nombres;
}
//getAllNames();
export { getAllNames, getAllPeople, getByName };
