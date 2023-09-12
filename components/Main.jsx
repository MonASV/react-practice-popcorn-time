import { useState } from "react";
import movies from "../src/data/movies.json";
import "./Main.css";

const Main = () => {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (id) => {
    console.log("deleting th emovie", { id });

    const newList = moviesToDisplay.filter((movie) => {
      return movie.id !== id;
    });

    setMoviesToDisplay(newList);
  };

  return moviesToDisplay.map((movieObj) => {
    const genreList = movieObj.genres.map((genre) => {
      return <h4 key={genre}>{genre}</h4>;
    });
    return (
      <div className="Main">
        <h1>Number of Movies {moviesToDisplay.length}</h1>

        <section key={movieObj.id} className="card">
          <h2>Movie: {movieObj.title}</h2>

        {movieObj.imgURL ? <img src={movieObj.imgURL} alt={movieObj.title} /> : <p>No picture available</p> }

          

          <h3>Rating: {movieObj.rating}</h3>
          {movieObj.rating >8 && <p>RECOMMENDED</p>}
          <h3>Year: {movieObj.year}</h3>
          <h3>Genres:</h3>
          {genreList}

          <button
            onClick={() => {
              deleteMovie(movieObj.id);
            }}
          >
            Delete
          </button>
        </section>
      </div>
    );
  });
};

export default Main;
