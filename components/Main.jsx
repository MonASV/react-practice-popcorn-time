import Movie from "./Movie";

function Main(props) {
  return (
    <div className="Main">
      {props.movies.map((movieObj, id) => {
        return (
          <Movie
            key={id}
            movieDetails={movieObj}
            callbackToDelete={props.callbackToDelete}
          />
        );
      })}
    </div>
  );
}

export default Main;
