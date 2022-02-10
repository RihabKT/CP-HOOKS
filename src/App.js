
import './App.css';
import MovieList from './Components/MovieList';

import AddMovie from './Components/AddMovie';
import Filter from './Components/Filter';
import { useState } from 'react';
import Rating from './Components/Rating';

function App() {
  const[searchRate,setSearchRate]=useState(0);
  const [Movies, setMovies]=useState([

    {
    title:"DON'T LOOK UP",
    description:"COMEDY",
    posterUrl:" https://news.mrraaja.com/wp-content/uploads/2021/12/21696/dont-look-up-review-a-satirical-drama-that-works-in-parts.jpg ",
    rating: 5,
    
    },
  
   {
     title:"THE IRISHMAN",
     description:"ACTION",
     posterUrl:"https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
     rating:3,
   },
  
   {
     title:"ESCOBAR",
     description:"DRAMA",
     posterUrl:" https://m.media-amazon.com/images/M/MV5BMTAwODJhN2YtMzUwMy00ZjI1LTllNGYtNTA3YTk5MTEyY2M2XkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_.jpg ",
     rating:4,
   },
  
   
   {
     title:"IT FOLLOWS",
     description:"HORROR",
     posterUrl:" https://i.pinimg.com/originals/3e/f6/de/3ef6deb3f2fe9dc0fe49f0246ec67106.jpg ",
     rating:0,
   },
  
   {
    title:"BLACK WIDOW",
    description:"ACTION",
    posterUrl:" https://lumiere-a.akamaihd.net/v1/images/image_b97b56f3.jpeg?region=0%2C0%2C540%2C810 ",
    rating:1,
   },
  
   {
     title:"THE WOLF OF WALLSTREET",
     description:"DRAMA",
     posterUrl:" https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg  ",
     rating:5,
   }]);


 const[filterByTitle,setFilterByTitle] = useState("");

 const addMovieClick = (objNew) => {
  setMovies([...Movies, objNew ])
        }
 



  return (
    <div className="App">
      <header>
        <div className='flexNew'>
        <h2> WATCH FREE TOP MOVIES FOR 2022 </h2>
        <Rating rate={searchRate}  setSearchRate={setSearchRate}  />
        </div>
        <Filter   setFilterByTitle={setFilterByTitle}/>
      </header>
     


<AddMovie addMovieClick={addMovieClick} />
<MovieList Movies={Movies} filterByTitle={filterByTitle} rate={searchRate}/>

 {/* <MovieList Movies={Movies.filter((el) => (el.title.toLowerCase().includes(filterByTitle.toLowerCase().trim())) && el.rate === searchRate)} />  */}
   {/* { <MovieList Movies={Movies.filter(el => (el.rate) === searchRate) }/>}     */}
  

    </div>

  );

}

export default App;
