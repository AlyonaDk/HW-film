const filmCard = document.getElementById("film-card");
const filmTitle = document.getElementById("film-title");
const filmAwards = document.getElementById("film-awards");
const filmImage = document.getElementById("film-img");

async function getFilm() {
  const res = await fetch("https://alyonadk.github.io/film_api/film.json");
  const obj = await res.json();
  const { title, year, poster, hasOscar } = obj;
  filmTitle.textContent = `${title}, ${year} year`;
  filmImage.src = poster;
  filmAwards.textContent = hasOscar ? "no awards" : "This movie won Oscar!";

}


getFilm();
