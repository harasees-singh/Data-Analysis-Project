import './App.css';
import React, { useState } from 'react';
import Data from "./assets/Inferences/findings.js" // importing all the report inferences 
import Navbar from "./components/Navbar.js"
import Header from './components/Header.js';
import Report from './components/Report.js'
import Legend from './components/Legend.js'
import Footer from './components/Footer.js'
import Prediction from './components/Prediction.js'
function App() {
  const [data, setData] = useState(Data);
  return (
    <>
      <Navbar />
      <div className="App">
        <Header />
        <Legend />
        {/* pass in the respective json to render a report */}
        <Report key={0} {...data[0]}/>
        <Report key={1} {...data[1]}/>
        <Report key={2} {...data[2]}/>
        <Report key={3} {...data[3]}/>
        <Report key={4} {...data[4]}/>
        <Prediction />
      </div>
      <Footer />
    </>
  );
}

export default App;
