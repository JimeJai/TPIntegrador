import net from "net";

const client = net.createConnection({ port: 3000 });

client.on("connect", () => {
  //const mensaje = { theme: "characters" };

  const mensaje = { theme: "peopleOneP", name: "Luke Skywalker" };
  //const mensaje = { theme: "peopleNames" };
  //const mensaje = { theme: "pages" };
  //const mensaje = { theme: "films" };
  //const mensaje = { theme: "filmOpening", name: "Return of the Jedi" };
  //const mensaje = { theme: "filmDate", numEp: 6 };
  const messege = JSON.stringify(mensaje);
  //console.log(messege);

  client.write(messege);
});

client.on("data", (serverMessege: string) => {
  const mensajeServer = serverMessege.toString();
  const mensajeJs = JSON.parse(mensajeServer);
  console.log(mensajeJs);
});
