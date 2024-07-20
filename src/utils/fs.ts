import { writeFile, readFile } from "fs/promises";

export async function writeJSON(mensaje) {
  const read = await readFile("./src/database/json.json", {
    encoding: "utf-8",
  });
  writeFile("./src/database/json.json", `${read}\n${mensaje}`);

  //writeFile("./src/database/json.json", read + " /" + mensaje);
}

//writeJSON({ theme: "characters" });
