import React from "react";

function Movie ({title,description, posterUrl,rating}) {
    return(
        <div className="Movie">
     <h1> {title} </h1>
      <p> {description} </p>
      <p> {posterUrl}</p>
      <h4 > {rating} </h4>
      </div>
    )
}

export default Movie;