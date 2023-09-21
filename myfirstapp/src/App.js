import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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


  // useEffect(()=>{
  //   //request for new page data
  // },[count])


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi There : {count}
        </p>

        <button onClick={() => {
          setCount(count + 1)
        }}>Count Up</button>  
      </header>
    </div>
  );
}

export default App;
