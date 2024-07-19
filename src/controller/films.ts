import { getFilmData } from "../model/films";
import { getData } from "../dataBase";

async function getAllFilms() {
  const films = await getData("films");
  //console.log(films.result);

  const titles = [];
  for (let index = 0; index < 6; index++) {
    const pelis = await films.result[`${index}`].properties.title;
    const ids = await films.result[`${index}`].properties.episode_id;
    //const fecha = await films.result[`${index}`].properties.release_date;
    titles.push("/ " + pelis);
    titles.push("episodio nº" + ids);
    //titles.push("fecha de realización " + fecha + "/");
  }
  //console.log(titles);
  //console.log(films.result); //si retorno esto, puedo hacer otras funciones en controler con la data de abajo, q devuelva fecha, capitulo y titulo
  return titles;
  //console.log(films.result[2].properties.title);
}

//getAllFilms();

async function getOpeningYEpisodeByNombre(title: string) {
  const films = await getFilmData();
  //console.log(films);
  const film = films.find((objeto: any) => objeto.properties.title == title);
  if (film) {
    console.log("Episodio numero " + film.properties.episode_id);

    console.log(film.properties.opening_crawl);
  } else if (!film) {
    console.log("Titulo inexistente");
  }
}
//getOpeningYEpisodeByNombre("Return of the Jedi");

async function dateFilm(numEpisode: number) {
  const films = await getFilmData();
  const peli = films.find(
    (film: any) => film.properties.episode_id == numEpisode
  );
  if (peli) {
    console.log(peli.properties.title);
    console.log("fecha de realización " + peli.properties.release_date);
  } else if (!peli) {
    console.log("Episodio inexistente");
  }
  //console.log(films.result[0].properties.title);//aca el q camibia deberia ser el numero de indice
  //console.log(films.result[2].properties.title); //result[2].properties.title) asi me da el nombre de una peli
} //console.log(films.result[2].properties.opening_crawl me da el opening completo re lindo!
//dateFilm(8);

export { dateFilm, getOpeningYEpisodeByNombre, getAllFilms };
