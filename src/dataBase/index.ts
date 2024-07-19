import { API_URL_ST } from "../constants"; //"https://www.swapi.tech/api/"

export async function getData(endPoint: string) {
  const response = await fetch(API_URL_ST + endPoint); //endpoint es people o films/ + //ruta de getallpoeple es "?page=2&limit=10"
  const data = await response.json();
  //console.log(data);

  return data;
}
