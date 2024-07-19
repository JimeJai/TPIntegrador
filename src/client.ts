import net from "net";

const client = net.createConnection({ port: 3000 });

client.on("connect", () => {
  //const mensaje = { theme: "people" }; //llama a getAllPeople
  // const mensaje = { theme: "peopleOneP", name: "Obi-Wan Kenobi" }; //llama a getByName
  //const mensaje = { theme: "peopleNames" }; // llama a getAllNames

  const mensaje = { theme: "films" }; //llama a getAllFilms
  //const mensaje = { theme: "filmOpening, name: "Return of the Jedi" };//llama a getOpening
  //const mensaje = { theme: "filmDate", numEp: 5 };//llama a dateFilm
  const messege = JSON.stringify(mensaje);
  //console.log(messege);

  client.write(messege);
});

client.on("data", (serverMessege: string) => {
  const mensajeServer = serverMessege.toString();
  const mensajeJs = JSON.parse(mensajeServer);
  console.log(mensajeJs);
});
