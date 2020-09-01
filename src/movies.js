// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (movies) => {
  return movies.map((filmMaker) => {
    return filmMaker.director
  })
}
const duplicates = movies.filter((item, index) => {
  // console.log(item.director.indexOf(movies) === index.director)
})

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arr) => {
  return arr.filter((movie) => {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  }).length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
  let avg = 0
  arr.map((element) => {
    if(element.rate) {
      avg += element.rate
      // console.log(avg)
    }
  })
  if(avg === 0) {
    return 0
  }
  return Number((avg / arr.length).toFixed(2))
}
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
  const dramaMovie = arr.filter(element => element.genre.includes('Drama'));
  return dramaMovie.length > 0 ? ratesAverage(dramaMovie) : 0;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (arr) => {
  return [...arr].sort((a,b) => 
  a.year - b.year || a.title.localeCompare(b.title))
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
  const movieTitles = [...movies].sort(function (a, b) {
    return a.title < b.title ? -1 : 1;
  });
  let top20Movies = [];
  let limit = 20;
  if (movieTitles.length < 20) {
    limit = movieTitles.length;
  }
  for (let i = 0; i < limit; i++) {
    top20Movies.push(movieTitles[i].title);
  }
  return top20Movies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = () => {
  let newMovies = movies.map((movie) => {
    
  })
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
