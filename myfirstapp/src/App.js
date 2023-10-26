import logo from './logo.svg';
import axios from "axios"
import './App.css';
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import poster from "./images/image 14.png"

function App() {

  const [movies,setMovies] = useState([])

  const [movies2,setMovies2] = useState([])

  const [searchResult,setSearchResult] = useState([])

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


    axios.get('http://www.omdbapi.com/?apikey=2fb1db83&s=Terminator')
    .then(function (response) {
      // handle success

      setMovies2(response.data.Search.slice(0,4))
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  },[])


  const handleSearchInput = (event) => {
    console.log(event.target.value)

    if(event.target.value.length > 3){
      axios.get('http://www.omdbapi.com/?apikey=2fb1db83&s='+event.target.value)
      .then(function (response) {
        // handle success
  
        setSearchResult(response.data.Search.slice(0,4))
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    }
  }

  return (
    <div className='container mx-auto'>


    <input onChange={handleSearchInput} className='p-2 outline-none drop-shadow-lg mx-auto block' placeholder='Search For Movie Title ...'/>  
    
    {
      searchResult.length > 0 && <>
      
      <div className='grid grid-cols-12'>
        <div>
          <h3>Search Result : </h3>
        </div>
      </div>

      <div className='grid grid-cols-4'>

        {
          searchResult.map(movie => 
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
      
      </>
    }

    


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



      <div className='grid grid-cols-12'>
        <div>
          <h3>Movies 2</h3>
        </div>
      </div>

      <div className='grid grid-cols-4'>

        {
          movies2.map(movie => 
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
