import { useState } from "react";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMovie = {
      title: title,
      rating: rating,
    };
    props.callbackToAddMovie(newMovie);

    setTitle("");
    setRating("");
  };

  return (
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
  );
}

export default AddMovie;
