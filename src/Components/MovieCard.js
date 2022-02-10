import React from "react";
import {Card,Image} from 'react-bootstrap';
import Rating from "./Rating";

function MovieCard(props){

   return(


<article className="MovieCard">



   <Card border="warning" style={{  width: "11rem", height: "25rem", marginRight: "30px", marginTop: "40px", backgroundColor: "lightyellow", borderRadius: "8px" }}>
    <Card.Header style={{fontWeight:"bolder",fontSize:"15px",color:"cornflowerblue"}}>{props.Movie.description}</Card.Header>
    <Image className="poster" src={props.Movie.posterUrl}  
    style={{borderRadius:"20%",width:"160px",textAlign:"center"}} />
    <Card.Body>
      <Card.Title style={{fontSize:"15px",color:"darkblue",fontWeight:"bolder"}}>{props.Movie.title}</Card.Title>
      <Card.Text style={{fontSize:"12px",fontWeight:"bold",color:"rgb(241, 88, 165)", textAlign:"center"}}>
        {props.Movie.rating}
        <Rating rate={props.Movie.rating}  />

       
      </Card.Text>
      
     
      
    </Card.Body>
  </Card>
  <br />  

  
</article> 
)
}




export default MovieCard;