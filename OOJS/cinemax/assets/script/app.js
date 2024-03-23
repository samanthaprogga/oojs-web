'use strict';

import * as utils from './utils.js';
import movies from '../data/movies.js';

const movieQuery = utils.select('.movie-query');
const moviesAvailable = utils.select('.movies-available');
const findMovies = utils.select('.find');
const details = utils.select('.movie-details');

let hasMovie = false;
let selectedMovie = null;
let lastSelectedMovie = null;


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Search and list suggestions                          */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function searchMovies(val) {
  let input = val.toLowerCase();
  const moviesFound = movies.filter(movie => movie.title.toLowerCase().includes(input));
  return moviesFound.length > 5 ? moviesFound.splice(0, 5) : moviesFound;
}

function listMovies(input) {
  moviesAvailable.innerHTML = '';
  hasMovie = false;
  const ocurrences = searchMovies(input);

  let list = '';
  if (ocurrences.length > 0) {
    for (let i = 0; i < ocurrences.length; i++) {
      list += `<li>${ocurrences[i].title}</li>`;
    }
    moviesAvailable.innerHTML = `<ul>${list}</ul>`;
    const moviesFound = utils.selectAll('.movies-available ul li');

    if (moviesFound.length > 0) {
      moviesFound.forEach(el => {
        utils.listen('click', el, () => {
          movieQuery.value = el.innerText.trim();
          selectedMovie = el.innerText.trim();
          hasMovie = true;
          moviesAvailable.classList.remove('is-visible');
        });
      });
    }
  } else {
    moviesAvailable.innerHTML = '<ul><li class="not-found">Movie not found</li></ul>';
  }
  moviesAvailable.classList.add('is-visible');
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Get movie                                            */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function getMovie(val) {
  const movieFound = movies.filter(movie => movie.title === val)[0];
  let genre = '';
  movieFound.genre.forEach(element => {
    genre += `<span>${element}</span>`;
  });

  lastSelectedMovie = movieFound.title;

  let block = `<div class="poster">
      <figure>
        <img alt="${movieFound.title}" src="${movieFound.poster}" title="${movieFound.title}"></img>
      </figure>
    </div>
    <div class="info-box">
      <div class="info">
        <h2>${movieFound.title}</h2>
        <p class="info-p">
          <span>${movieFound.year}</span><span>${movieFound.runningTime}</span>
        </p>
        <p>${movieFound.description}</p>
        <p class="info-g genre-list">
          ${genre}
        </p>
      </div>
  </div>`;
  
  details.innerHTML = block;
    
  utils.sleep(250).then(() => {
    movieQuery.value = '';
    hasMovie = false;
    details.classList.add('is-visible');
  });
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Events                                               */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

utils.listen('click', document.body, event => {
  if (!moviesAvailable.contains(event.target)) {
    moviesAvailable.classList.remove('is-visible');
  }
});

utils.listen('input', movieQuery, () => {
  let val = movieQuery.value.trim();
  if (val.length > 2) listMovies(val);
  else moviesAvailable.classList.remove('is-visible');
});

utils.listen('focus', movieQuery, () => {
  moviesAvailable.classList.remove('is-visible');
});

utils.listen('click', findMovies, () => {
  if (movieQuery.value.trim().length === 0 || !hasMovie) movieQuery.focus();
  if (hasMovie && selectedMovie !== lastSelectedMovie) {
    details.classList.remove('is-visible');
    utils.sleep(250).then(() => {
      getMovie(selectedMovie);
    });
  }
});