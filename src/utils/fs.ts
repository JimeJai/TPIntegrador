import { writeFile, readFile } from "fs/promises";

export async function writeJSON(mensaje) {
  const read = await readFile("./src/dataBase/json.json", {
    encoding: "utf-8",
  });
  const dbParseada = JSON.parse(read);
  dbParseada.push(mensaje);
  const dbStringy = JSON.stringify(dbParseada);
  //console.log(dbParseada);

  await writeFile("./src/dataBase/json.json", dbStringy);
  //writeFile("./src/database/json.json", read + " /" + mensaje);
}

//writeJSON({ theme: "characters" });
