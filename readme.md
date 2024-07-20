INSTRUCTIVO PARA EL USUARIO

La aplicacion recibe peticiones y devuelve informaciós sobre personajes y peliculas de STARWARS.

Las posibles peticiones son:

const mensaje = { theme: "pages" }; //Devuelve el paginado completo de personajes
const mensaje = { theme: "peopleOneP", name: "Leia Organa" };//name: "string"--> nombre del personaje//Devuelve info del personaje buscado
const mensaje = { theme: "peopleNames" };//Devuelve los nombres de los personajes
const mensaje = { theme: "characters" };//Devuelve los personajes de la primera pagina
const mensaje = { theme: "films" };//Devuelve info de todas las peliculas
const mensaje = { theme: "filmOpening, name: "Return of the Jedi" };//name: "string" --> nombre de la pelicula a buscar//Devuelve número de episodio y Opening de la pelicula buscada
const mensaje = { theme: "filmDate", numEp: 5 };//numEp: number --> numero de la pelicula//Devuelve el nombre de la pelicula buscada y su fecha de realización

Desde el archivo Client. ts, se envia las peticiones.
Desde la terminal:
npm run dev --> para levantar el servidor.
npm run client --> para enviar el pedido.

Cada busqueda sera guardada en el archivo json.json
