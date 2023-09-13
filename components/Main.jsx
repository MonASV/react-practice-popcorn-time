import Movie from "./Movie";

function Main(props){

    // let message;
    // if(moviesToDisplay.length > 0){
    //     message = <h1>Number of movies: {moviesToDisplay.length}</h1>
    // } else {
    //     message = <h1>Sorry, no movies to display</h1>
    // }


    return (
        <div className="Main">
            
            {/* {message} */}

            {props.movies.map((movieObj) => {
                return (
                    <Movie key={movieObj.id} movieDetails={movieObj} callbackToDelete={props.callbackToDelete} />
                )
            })}
            
        </div>
    );
}

export default Main;