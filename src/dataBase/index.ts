import { API_URL_ST } from "../constants"; //"https://www.swapi.tech/api/"

export async function getData(endPoint: string) {
  const response = await fetch(API_URL_ST + endPoint);
  const data = await response.json();
  return data;
}
