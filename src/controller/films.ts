import { getFilmData } from "../model/films";
import { getData } from "../dataBase";
import { Messages } from "../enum";

async function getAllFilms() {
  const films = await getData("films");

  const titles = [];
  for (let index = 0; index < 6; index++) {
    const pelis = await films.result[`${index}`].properties.title;
    const ids = await films.result[`${index}`].properties.episode_id;

    titles.push("/ " + pelis);
    titles.push("episodio nº" + ids);
  }
  return titles;
}

//getAllFilms();

async function getOpeningYEpisodeByNombre(title: string) {
  const films = await getFilmData();
  const film = films.find((objeto) => objeto.properties.title == title);
  if (film) {
    return `Episodio numero ${film.properties.episode_id}:\n${film.properties.opening_crawl}`;
  } else if (!film) {
    return Messages.NOT_FOUND;
  }
}
//getOpeningYEpisodeByNombre("Return of the Jedi");

async function dateFilm(numEpisode: number) {
  const films = await getFilmData();
  const peli = films.find((film) => film.properties.episode_id == numEpisode);
  if (peli) {
    return (
      peli.properties.title +
      ", fecha de realización " +
      peli.properties.release_date
    );
  } else if (!peli) {
    return Messages.NOT_FOUND;
  }
}

export { dateFilm, getOpeningYEpisodeByNombre, getAllFilms };
