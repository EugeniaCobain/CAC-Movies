/* USO DE LA API THEMOVIEDB.ORG */

//Declaro variables 
let page = 1;
const btnAnterior = document.getElementById("anterior");
const btnSgte = document.getElementById("siguiente");

//Declaro al objeto "options" que va a almacenar lo que espero recibir de la API, tal como me indica la API de "themoviedb.org"
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWNkYWVjYjkwYTdhYmUwNTg2NDRkZGU3YTQ5ZjU1ZSIsInN1YiI6IjY2NTRjZjI0ODgzOWYwMzc5YWZmNTlhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UeMf10XQd-EQDXR4gom0pGGboNADMmhPzBfIxhO8Yl8'
    }
  };

// Función para mostrar las tendencias desde la AAPI
function mostrarTendencias() {
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
    .then(response => response.json())
    .then(datos => {
        // Capturo el contenedor de tendencias
        const tendenciaGallery = document.querySelector("[data-tendencia]");
        // Limpio el contenedor antes de agregar nuevas películas
        tendenciaGallery.innerHTML = '';
        // Extraigo las películas de datos
        const peliculas = datos.results;
        // Itero sobre las películas y las agrego al contenedor a su contenedor
        peliculas.forEach(function(element) {
            // <a>
            const tendenciaEnlace = document.createElement('a');
            tendenciaEnlace.href = `./pages/mariobros.html`; // Define la URL adecuada para cada película
            // < div de la imagen de la película>
            const tendenciaImgDiv = document.createElement('div');
            tendenciaImgDiv.className = 'tendencia_img';
            // <img Imagen de la película>
            const tendenciaImagen = document.createElement('img');
            tendenciaImagen.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
            tendenciaImagen.alt = element.original_title;
            tendenciaImagen.loading = 'lazy';
            // <div del título de la película>
            const tendenciaTituloDiv = document.createElement('div');
            tendenciaTituloDiv.className = 'tendencia_titulo';
            // <h4 título película>
            const tendenciaTitulo = document.createElement('h4');
            tendenciaTitulo.textContent = element.original_title;

            // Agrego h4 al div del título
            tendenciaTituloDiv.appendChild(tendenciaTitulo);

            // Agrego img al div tendencia_img
            tendenciaImgDiv.appendChild(tendenciaImagen);
            
            // Agrego el div del título al div tendencia_img
            tendenciaImgDiv.appendChild(tendenciaTituloDiv);

            // Agrego el div tendencia_img al enlace
            tendenciaEnlace.appendChild(tendenciaImgDiv);

            // Agrego el enlace al contenedor de tendencias
            tendenciaGallery.appendChild(tendenciaEnlace);
        });
    })
    .catch(err => console.error(err));
}

/* FUNCIÓN PARA LOS BOTONES "ANTERIOR" Y "SIGUIENTE" */
btnAnterior.addEventListener("click", ()=>{
    if (page > 1){
        page -=1;
        mostrarTendencias();
        /* cargarPeliculas(); */
    }
});

btnSgte.addEventListener("click", ()=>{
    if (page <= 2){
        page +=1;
        mostrarTendencias();
       /* cargarPeliculas(); */
    }
});

/* SECCIÓN ACLAMADAS */
function mostrarAclamadas(){
    fetch('https://api.themoviedb.org/3/movie/top_rated', options)
    .then(response => response.json())
    .then(datos => {
        console.log(datos);
        //Capturo en una constante al div contenedor de las películas mostradas en la sección ACLAMADAS.
        const contenedor = document.querySelector("[data-aclamadas]");
        const aclamadas = datos.results;
        aclamadas.forEach(function(element){
            //<div></div>
            const aclamadasDiv = document.createElement('div');
            //<img>
            const aclamadasImagen = document.createElement('img');
            aclamadasImagen.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
            aclamadasImagen.alt = element.original_title;
            aclamadasImagen.loading = 'lazy';
            // Añado los elementos hijos a sus padres
            aclamadasDiv.appendChild(aclamadasImagen);
            contenedor.appendChild(aclamadasDiv);
        });
    })
    .catch(err => console.error(err));
}

/* Llamada a las funciones */
mostrarTendencias();
mostrarAclamadas();








/* SECCIÓN TENDENCIAS */

/* const cargarPeliculas = async () => {
    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`);
        https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
        console.log(respuesta);
        if(respuesta.status === 200){
            const datos = await respuesta.json();
        const contenedor = document.getElementsByClassName("tendencia_gallery");
        let peliculas = [];
        datos.results.forEach(pelicula =>{
            pelicula += `
            <a href="./pages/mariobros.html">
            <div class="tendencia_img"> 
                <img  src= https://image.tmdb.org/t/p/w500${pelicula.poster_path} alt="No way up" loading="lazy">
                <div class="tendencia_titulo">
                    <h4>${pelicula.original_title}</h4>
                </div>
            </div>
            </a>
            `
            contenedor.innerHTML = peliculas;
        })
        }
    } catch(error){
        console.log(error);
    }
} */

/* CON APPEND ESTE ES EL MÍO */
/* function mostrarTendencias(){
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
    .then(response => response.json())
    .then(datos => {
        console.log(datos);

        //Capturo en una constante al div contenedor de las películas mostradas en la sección TENDENCIAS.
        const tend = document.querySelector("[data-tendencia]");

        //Extraigo la propiedad "results" del objeto datos y la almaceno en la constante peliculas.
        const peliculas = datos.results;

        //Uso bucle FOR EACH para generear los elementos HTML de la sección TENDENCIAS y poder mostrar las películas de la API
        peliculas.forEach(function(element){
            // Capturo en constantes los elementos de la sección tendencias
            //<a></a>
            const tendenciaEnlace = document.createElement('a');
            tendenciaEnlace.href = './pages/mariobros.html';

            //<div class="tendencia_img"></div>
            const tendenciaImgDiv = document.createElement('div');
            tendenciaImgDiv.className = 'tendencia_img' ; 

            //<img>
            const tendenciaImagen = document.createElement('img');
            tendenciaImagen.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
            tendenciaImagen.alt = element.original_title;
            tendenciaImagen.loading = 'lazy';

            //<div class="tendencia_tendencia_titulo"></div>
            const tendenciaTituloDiv = document.createElement('div');
            tendenciaTituloDiv.className = 'tendencia_titulo';

            //<h4></h4>
            const tendenciaTitulo = document.createElement('h4');
            tendenciaTitulo.textContent = element.original_title;

            // Añado los elementos hijos a sus padres
            tendenciaTituloDiv.appendChild(tendenciaTitulo);
            tendenciaImgDiv.appendChild(tendenciaImagen);
            tendenciaImgDiv.appendChild(tendenciaTituloDiv);
            tendenciaEnlace.appendChild(tendenciaImgDiv);
            tend.appendChild(tendenciaEnlace);
        });
    })
    .catch(err => console.error(err));
} */

/* CON INNER
function mostrarTendencias(){
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
    .then(response => response.json())
    .then(datos => {
        console.log(datos);
        const peliculas = datos.results;

        //Capturo en una constante al div contenedor de las películas mostradas en la sección TENDENCIAS.
        const tend = document.querySelector("[data-tendencia]");
        tend.classList.add("tendencia_gallery");

        peliculas.forEach(function(element){
            const article = document.createElement("article");
            //Inyecto contenido en el div class "tendencia_gallery" capturado en tend
            article.innerHTML = `
                <a href="./pages/mariobros.html">
                <div class="tendencia_img"> 
                    <img  src= https://image.tmdb.org/t/p/w500${element.poster_path} alt="No way up" loading="lazy">
                    <div class="tendencia_titulo">
                        <h4>${element.original_title}</h4>
                    </div>
                </div>
                </a>
            `
            tend.appendChild(article);
        });
    })
    .catch(err => console.error(err));
} */

//https://github.com/GiselaFlores/Api-cargaDePeliculas-js
//https://github.com/MartinaAsad/cac_movies/blob/main/cac_movies/script.js

//https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1


//const siguiente = document.getElementById("siguiente")
/* let pagina = 1;
siguiente.addEventListener("click", ()=>{
    if (pagina > 1) {
        pagina -= 1;
        mostrarTendencias();
    }
}
   
   


)
 */

/* MOVIE POPULAR: GET 
https://api.themoviedb.org/3/movie/popular

URL QUE USO DE LA API QUE COMBINAMOS CON EL TOKEN QUE NOS GENERAMOS Y LOS QUERY PARAMS PARA QUE FORME LA URL COMPLETA

*/



















            
