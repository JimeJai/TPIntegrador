// const API_URL =
//   "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=2a4719ff22a727511e390bdd5c8cfbb4&hash=39de316ab915a761d15e9450e478c980";
// "https://gateway.marvel.com/";
const API_URL_ST = "https://www.swapi.tech/api/";

const PORT = 3000;
export { API_URL_ST, PORT };
//const API_URL_PK = "https://pokeapi.co/api/v2/";

// async function getData(ruta: string) {
//   const response = await fetch(API_URL_ST + ruta);
//   const data = await response.json();
//   console.log(data.result); //console.log(data.result[2].properties.title) asi me da el nombre de una peli
// } //console.log(data.result[2].properties.opening_crawl me da el opening completo re lindo!
// getData("films");

// async function getDataC() {//esa funcion era para marvel
//   const response = await fetch(API_URL);
//   const data = await response.json();
//   console.log(data.data.results); //data.data.results[0].name
// }
// getDataC();

// async getByType(type: string) {
//   const info = await this.getData();

// }

// async function getById(id) {
//   const info = await getDataC();
// }

//-----------------------------------------------------------------------

//   import { writeFile, readFile } from "fs/promises";

// async function writeDb(title: string) {
//   const data = await readFile("./src/db/history.txt", { encoding: "utf-8" });

//   await writeFile("./src/db/history.txt", `${data}\n${title}`);
// }

// export { writeDb };
