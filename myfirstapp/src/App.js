import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function App() {

  // const [isClicked,seIsClicked] = useState(false)

  // useEffect(()=>{
  //   // lifecycle
  //   console.log("mounted")
  // },[])

  // useEffect(()=>{
  //   // updating
  //   console.log("the button has been clicked",isClicked)
  // },[isClicked])


  const [count,setCount] = useState(0)

  const navigate = useNavigate()

  useEffect(()=>{
    // will execute code in each count update
    if(count > 10){
      navigate("/about")
    }
  },[count])

  // useEffect(()=>{
  //   //request for new page data
  // },[count])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi There : {count}
        </p>

        <button className='btn' onClick={() => {
          setCount(count + 1)
        }}>Count Up</button>  

        {/* {
          count > 10 ? <Navigate to="/about" /> : <></>
        } */}

        <button onClick={()=>{
          //javasctipt
          navigate("/about")
        }}>About Page</button>


        <Link to={"/about"}>
          <button>About Page</button>
        </Link>
      </header>
    </div>
  );
}

export default App;
