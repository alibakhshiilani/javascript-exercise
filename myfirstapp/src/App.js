import logo from './logo.svg';
import axios from "axios"
import './App.css';
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import poster from "./images/image 14.png"

function App() {

  const [movies,setMovies] = useState([])

  useEffect(()=>{

    axios.get('http://www.omdbapi.com/?apikey=2fb1db83&s=Inception')
    .then(function (response) {
      // handle success

      setMovies(response.data.Search.slice(0,4))
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  },[])

  return (
    <div className='container mx-auto'>
    
      <div className='grid grid-cols-12'>
        <div>
          <h3>Movies</h3>
        </div>
      </div>

      <div className='grid grid-cols-4'>

        {
          movies.map(movie => 
          <div className='relative'>
            <img src={movie.Poster} />
            <div className='info flex flex-col gap-2 absolute bottom-7 left-7 text-white font-bold'>
              <span className='font-black'>{movie.Title}</span>

              <span>{movie.Year}</span>

              <span>{movie.imdbID}</span>

              <span className='capitalize'>{movie.Type}</span>
            </div>
          </div>
        )
        }
        

      </div>
    
    </div>
  );
}

export default App;
