import { useState } from "react";

import movies from "./data/movies.json";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import "./App.css";

function App() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const deleteMovie = (movieTitle) => {
    const newList = moviesToDisplay.filter((element) => {
      return element.title !== movieTitle;
    });
    setMoviesToDisplay(newList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMovie = {
      title: title,
      rating: rating,
    };
    3;
    const newList = [newMovie, ...moviesToDisplay];

    setMoviesToDisplay(newList);

    setTitle("");
    setRating("");
  };

  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <section>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              required
              placeholder="enter the title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </label>

          <label>
            Rating:
            <input
              name="rating"
              type="number"
              required
              min={0}
              max={10}
              placeholder="rating"
              value={rating}
              onChange={(event) => {
                setRating(event.target.value);
              }}
            />
          </label>

          <button>Create</button>
        </form>
      </section>

      <Main movies={moviesToDisplay} callbackToDelete={deleteMovie} />
      <Footer />
    </>
  );
}

export default App;
