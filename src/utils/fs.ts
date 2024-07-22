import { writeFile, readFile } from "fs/promises";

export async function writeJSON(mensaje) {
  const read = await readFile("./src/dataBase/json.json", {
    encoding: "utf-8",
  });

  await writeFile("./src/dataBase/json.json", `${read}\n${mensaje}`);

  //writeFile("./src/database/json.json", read + " /" + mensaje);
}

//writeJSON({ theme: "characters" });
