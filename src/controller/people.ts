import { getCharacters } from "../model/people";
import { getData } from "../dataBase";
import { Messages } from "../enum";

async function getAllPeople() {
  const paginas = [];
  for (let index = 1; index < 10; index++) {
    const infoAll = await getData("people" + `?page=${index}&limit=10`);

    paginas.push(infoAll.results);
  }
  return paginas;
}
//getAllPeople();

async function getByName(name: string) {
  const personajes = await getCharacters();
  const personaje = personajes.find((objeto: any) => objeto.name == name);
  if (!personaje) {
    return Messages.NOT_FOUND;
  }
  if (personaje) {
    const info = await getData("people" + `/${personaje.uid}/`);
    return `${info.result.properties.name}\naltura: ${info.result.properties.height}\npeso: ${info.result.properties.mass}\ncolor de pelo: ${info.result.properties.hair_color}\ncolor de ojos: ${info.result.properties.eye_color}\ngenero: ${info.result.properties.gender}`;
    //return info.result.properties.height;
  }
}

//getByName("blaaa");

async function getAllNames() {
  const personajes = await getCharacters();
  const nombres = personajes.map((objeto: any) => objeto.name);
  return nombres;
}
//getAllNames();
export { getAllNames, getAllPeople, getByName };
