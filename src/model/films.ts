import { getData } from "../dataBase";

async function getFilmData() {
  const films = await getData("films");
  //console.log(films.result);
  return films.result;
}
//getFilmData();

export { getFilmData };
