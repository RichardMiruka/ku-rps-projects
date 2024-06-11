
import React from 'react';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Navbar from './component/navbar';

import Films from './component/films';

import Home from './component/home';

import Actors from './component/actor';



const router = createBrowserRouter({

  children: [

    {

      path: "/",

      element: (

        <div className="App">

          <Navbar title="Oscars 2023" />

          <Outlet />

        </div>

      ),

      children: [

        {

          path: "",

          element: <Home title="Oscar winners" />,

        },

        {

          path: "films",

          element: <Films />,

        },

        {

          path: "actors",

          element: <Actors />,

        },

      ],

    },

  ],

});



function App() {

  return <RouterProvider router={router} />;

}



export default App;

/*import { Component } from "react";
import "./css/style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <h2 className = "logo">
            <a className = "logo-link" href = "#">
              This is a Blog Application</a></h2>
          <ul className = "nav-menu">
            <li><a class="nav-menu-link" href="#">Home</a></li>
            <li><a class="nav-menu-link" href="#">Actors</a></li>
            <li><a class="nav-menu-link" href="#">Best Films</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;


/*import React, { Component } from 'react'
// Remove the commented out class declaration
  //render() {
  function App() {
    return (
      <div className="App">
        <nav>
          <h2>This is a Blog Application</h2> <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    )
  }
  

export default App

/*import Blog from './blog/blog.jsx'

function App() {
  return (<div className = "App">
    <Blog /> </div>
  )
}

export default App
*/
 

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/