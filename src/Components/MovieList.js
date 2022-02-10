import React from "react";
import MovieCard from "./MovieCard";


function MovieList({ Movies, filterByTitle, rate, searchRate }) {

    return (<div className="MovieList">
        {Movies.filter(el => el.title.toLowerCase().includes(filterByTitle.toLowerCase().trim()) &&
            el.rating >= rate).map((el, i) => <MovieCard Movie={el} key={i} />)}

    </div>)
}

export default MovieList;
