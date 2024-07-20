import { getData } from "../dataBase";

async function getFilmData() {
  const films = await getData("films");
  return films.result;
}
//getFilmData();

export { getFilmData };
