import {
  dateFilm,
  getAllFilms,
  getOpeningYEpisodeByNombre,
} from "../controller/films";
import { getAllPeople, getAllNames, getByName } from "../controller/people";
import { Messages } from "../enum";

async function endPoints(mensaje: any) {
  const request = mensaje.toString();
  //   const mens = JSON.stringify(mensaje); //lo hace string
  const requestJS = JSON.parse(request); //lo pasa a objeto jS

  if (requestJS.theme == "people") {
    const paginado = await getAllPeople();
    const paginadoJson = JSON.stringify(paginado);
    //console.log(paginadoJson);
    return paginadoJson;
  } else if (requestJS.theme == "peopleOneP") {
    //este mensaje tiene ademas el parametro name
    const perso = await getByName(requestJS.name);
    const persoJson = JSON.stringify(perso);
    return persoJson;
  } else if (requestJS.theme == "peopleNames") {
    const names = await getAllNames();
    const namesJson = JSON.stringify(names);
    return namesJson;
  } else if (requestJS.theme == "films") {
    const films = await getAllFilms();
    const filmsJson = JSON.stringify(films);
    return filmsJson;
  } else if (requestJS.theme == "filmOpening") {
    const op = await getOpeningYEpisodeByNombre(requestJS.name);
    const opJson = JSON.stringify(op);
    return opJson;
  } else if (requestJS.theme == "filmDate") {
    const date = await dateFilm(requestJS.numEp);
    const dateJson = JSON.stringify(date);
    return dateJson;
  } else {
    return Messages.BAD_REQUEST;
  }
}
//endPoints({ theme: "peopleOneP", name: "Leia Organa" });

export { endPoints };

//const mensaje = { theme: "people" }; //llama a getAllPeople
//const mensaje = { theme: "peopleOneP", name: "Leia Organa" }; //llama a getByName
//const mensaje = { theme: "peopleNames" };// llama a getAllNames

// const mensaje = { theme: "films" }; //llama a getAllFilms
//const mensaje = { theme: "filmOpening, name: "Return of the Jedi" };//llama a getOpening
//const mensaje = { theme: "filmDate", numEp: 5 };//llama a dateFilm
