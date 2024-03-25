import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar.jsx';
import { Banner } from './components/Banner.jsx';
import { Skills } from './components/Skills.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

const ApiUrl = config[import.meta.env.UI_NODE_ENV || "development"].apiUrl;
console.log(import.meta.env.UI_NODE_ENV)

function App() {
  useEffect(() => {
    fetch(ApiUrl + "/api")
    .then((res) => res.json())
    .then((data) => {console.log(data)})
  }, [])

  return (
    <div className="App">
       <NavBar />
       <Banner />
       <Skills />
       <Projects />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
