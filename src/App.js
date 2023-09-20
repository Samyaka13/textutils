// import logo from './logo.svg';
import "./App.css";
import React from 'react'
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Forms from "./Components/Forms";
import {useState} from "react";
import Alert from "./Components/Alert";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Components/Home";


// let name = "Samyak"
function App() {
  const [mode,setMode] = useState('light');//Whether dark mode is enabled or not
  // const [color,setColor] = useState('white');
  const[text,setText] = useState('text-light');
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light' && text === 'text-light'){
     setMode('dark')
     setText('text-dark')
     document.body.style.backgroundColor = 'black';
    //  document.title = 'TextUtils - Dark Mode'
    // setInterval(()=>{
    //   document.title = "TextUTils is fun";
    // },2000);
    // setInterval(()=>{
      
    //   document.title = "TextUTils download";
    // },1500);

    //  showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      setText('text-light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
  }
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <div>
  //       {/* //   <h1>Hello World</h1> */}
  //        {/* <Link to="about">About Us</Link> */}
  //         <Forms showAlert = {showAlert} heading  = "Enter your text to analyze below" className = "text-light" mode={mode}></Forms> 
  //        </div>
  //     ),
  //   },
  //   {
  //     path: "about",
  //     element: <About/>,
  //   },
  // ]);
  
  
  // const color1 = ()=>{
    //   document.body.style.backgroundColor = color;
    //   console.log(color);
    //   if(color == 'black'){
      //     setMode('light')
      //     setText('text-light')
      //     document.body.style.backgroundColor = 'white';
      //     setColor('skyBlue');
      //     document.body.style.backgroundColor = 'skyBlue';
      //     setText('text-dark')
      //   //     console.log(1);   
      
      //   //   }else if(color == 'white'){
        //   //     setColor('skyBlue');
        //   //     setText("text-dark")
        //   //     document.body.style.backgroundColor = 'skyBlue';
        //   //     console.log(2);   
        //   //     console.log(color);   
        //   //   }else{
          //   //     setColor('white');
          //   //     setText("text-light");  
          //   //     document.body.style.backgroundColor = 'white';
          //   //     console.log(3);   
          //   //   }
          //   //   console.log(color);   
          //   // }
          return (
            <>
  <div >{/*This my-3 gives margin it comes along with class container*/}
      {/* <Navbar title = "Samyak's  Game" about = "About Samyak's Game" mode={mode} toggleMode={toggleMode} /> */}
      {/* <Routes> */}
      {/* <Navbar /> */}
      {/* <Route path = '/' element ={<Home/>}></Route> */}
      <Navbar title = "Samyak's  Game" about = "About Samyak's Game" mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert}></Alert>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Forms showAlert = {showAlert} heading  = "Enter your text to analyze below" className = "text-light" mode={mode}></Forms>}></Route>
      <Route path = '/About' element  = {<About/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <About/> */}
      
      {/* <Route path="/"element = {<Forms showAlert = {showAlert} heading  = "Enter your text to analyze below" className = "text-light" mode={mode}></Forms>}></Route> */}
      {/* <Route path = 'About' element = {<About/>}></Route> */}
      {/* <About/>   */}
      {/* </Routes> */}
      </div>
    </>
  );
}
export default App;