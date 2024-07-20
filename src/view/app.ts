import {
  dateFilm,
  getAllFilms,
  getOpeningYEpisodeByNombre,
} from "../controller/films";
import { getCharacters } from "../model/people";
import { getAllPeople, getAllNames, getByName } from "../controller/people";
import { Messages } from "../enum";
import { writeJSON } from "../utils/fs";

async function endPoints(mensaje) {
  const request = mensaje.toString();

  const requestJS = JSON.parse(request);

  if (requestJS.theme == "pages") {
    const paginado = await getAllPeople();
    const paginadoJson = JSON.stringify(paginado);
    await writeJSON(request);
    return paginadoJson;
  } else if (requestJS.theme == "peopleOneP") {
    if (typeof requestJS.name != "string") {
      const mens = Messages.BAD_REQUEST;
      return JSON.stringify(mens);
    }
    await writeJSON(request);
    const perso = await getByName(requestJS.name);
    const persoJson = JSON.stringify(perso);
    return persoJson;
  } else if (requestJS.theme == "peopleNames") {
    const names = await getAllNames();
    const namesJson = JSON.stringify(names);
    await writeJSON(request);
    return namesJson;
  } else if (requestJS.theme == "films") {
    const films = await getAllFilms();
    const filmsJson = JSON.stringify(films);
    await writeJSON(request);
    return filmsJson;
  } else if (requestJS.theme == "filmOpening") {
    if (typeof requestJS.name != "string") {
      const mens = Messages.BAD_REQUEST;
      return JSON.stringify(mens);
    }
    const op = await getOpeningYEpisodeByNombre(requestJS.name);
    const opJson = JSON.stringify(op);
    await writeJSON(request);
    return opJson;
  } else if (requestJS.theme == "filmDate") {
    if (typeof requestJS.numEp != "number") {
      const mens = Messages.BAD_REQUEST;
      return JSON.stringify(mens);
    }
    await writeJSON(request);
    const date = await dateFilm(requestJS.numEp);
    const dateJson = JSON.stringify(date);
    return dateJson;
  } else if (requestJS.theme == "characters") {
    const paginado = await getCharacters();
    const paginadoJson = JSON.stringify(paginado);
    await writeJSON(request);
    return paginadoJson;
  } else {
    const mens = Messages.BAD_REQUEST;
    return JSON.stringify(mens);
  }
}

export { endPoints };
