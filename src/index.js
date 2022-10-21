import "./style.css";
import topGunMaverick from "./assets/topGunMaverick.jpg";
import jurassicWorld from "./assets/jurassicWorldDominion.jpg";
import strangerThings from "./assets/strangerThings.jpg";
import jhonnyEnglishReborn from "./assets/jhonnyEnglishReborn.jpg";
import bellBottom from "./assets/bellBottom.jpg";
import ugly from "./assets/ugly.jpg";
import ThirteenB from "./assets/13B.jpg";
import avatar from "./assets/avatar.jpg";
import alien from "./assets/alien.jpg";
import rrr from "./assets/RRR.jpg";

const form = document.querySelector("form");
const moviesContent = document.querySelector(".movies-card");
const error = document.querySelector(".error");

let formValues = {};
let state = {
  movies: [
    {
      name: "Top Gun: Maverick",
      rating: 8.4,
      director: "Joseph Kosinski",
      language: "English",
      genre: "Action",
      other: "",
      imageUrl: topGunMaverick,
    },
    {
      name: "Jurassic World Dominion",
      rating: 5.7,
      director: "Colin Trevorrow",
      language: "English",
      genre: "Action",
      other: "",
      imageUrl: jurassicWorld,
    },
    {
      name: "Stranger Things",
      rating: 8.7,
      director: "Matt Duffer, Ross Duffer",
      language: "English",
      genre: "Horror",
      other: "Drama",
      imageUrl: strangerThings,
    },
    {
      name: "Johnny English Reborn",
      rating: 6.3,
      director: "Oliver Parker",
      language: "English",
      genre: "Comedy",
      other: "",
      imageUrl: jhonnyEnglishReborn,
    },
    {
      name: "Bell Bottom",
      rating: 6.1,
      director: "Ranjit Tiwari",
      language: "Hindi",
      genre: "Thriller",
      other: "",
      imageUrl: bellBottom,
    },
    {
      name: "Ugly",
      rating: 7.9,
      director: "Anurag Kashyap",
      language: "Hindi",
      genre: "Suspense",
      other: "",
      imageUrl: ugly,
    },
    {
      name: "13B",
      rating: 7.3,
      director: "Vikram Kumar",
      language: "Hindi",
      genre: "Horror",
      other: "",
      imageUrl: ThirteenB,
    },
    {
      name: "Avatar",
      rating: 7.8,
      director: "James Cameron",
      language: "English",
      genre: "Action",
      other: "Popular",
      imageUrl: avatar,
    },
    {
      name: "Alien",
      rating: 8.5,
      director: "Ridley Scott",
      language: "English",
      genre: "Horror",
      other: "Popular",
      imageUrl: alien,
    },
    {
      name: "RRR",
      rating: 8,
      director: " S. S. Rajamouli",
      language: "Tamil",
      genre: "Action",
      other: "Trending",
      imageUrl: rrr,
    },
  ],
};

let values;
let keys;
let prevValues;
let filterMovies;

function showUI(movies) {
  if (movies.length) {
    let str = movies.reduce((acc, curr) => {
      return (
        acc +
        `
      <div class="card">
      <div class="img">
      <img src="${curr.imageUrl}" />
      </div>
      <div class="content">
        <p class="name">${curr.name}</p>
        <span class="rating">IMDb: ${curr.rating}/10</span>
        <span class="author">Director: ${curr.director}</span>
        <span class="language">${curr.language}</span>
        <span class="genre">${curr.genre}</span>
        <span class="other">${curr.other}</span>
      </div>
    </div>      
      `
      );
    }, "");

    moviesContent.innerHTML = str;
  } else {
    error.classList.remove("disable");
    moviesContent.classList.add("disable");
  }
}

function submitForm(e) {
  e.preventDefault();
  values = Object.values(formValues);
  keys = Object.keys(formValues);
  filterByCategory(keys, values, state.movies);
}

function filterByCategory(ObjectKeys, ObjectValues, MoviesArr) {
  if (ObjectKeys.length === 0) {
    return;
  } else {
    ObjectKeys.forEach((key, idx) => {
      filterMovies = MoviesArr.filter((tempMovie) => {
        return tempMovie[key] === ObjectValues[idx];
      });
      ObjectKeys.shift();
      ObjectValues.shift();
      filterByCategory(ObjectKeys, ObjectValues, filterMovies);
    });
  }

  showUI(filterMovies);
}

function getFormValues(e) {
  formValues = { ...formValues, [e.target.name]: e.target.value };
}

// Add EventListeners
showUI(state.movies);
form.addEventListener("submit", submitForm);
form.addEventListener("change", getFormValues);
