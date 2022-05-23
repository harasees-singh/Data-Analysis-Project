import './App.css';
import React, { useState } from 'react';
import Data from "./assets/Inferences/findings.js"
import Navbar from "./components/Navbar.js"
import Header from './components/Header.js';
import Report from './components/Report.js'
import Legend from './components/Legend.js'
import Footer from './components/Footer.js'
import Prediction from './components/Prediction.js'
function App() {
  const [data, setData] = useState(Data);

  const globalSales = <iframe className='report' title="Global Sales" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMWUyOWVmNmUtYjU0YS00ODFmLWE4NmItOGQ0NjQwZmJjYzhkIiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>;
  return (
    <>
      <Navbar />
      <div className="App">
        <Header />
        <Legend />
        <Report {...data[0]}/>
        <Report {...data[1]}/>
        <Report {...data[2]}/>
        <Report {...data[3]}/>
        <Report {...data[4]}/>
        <Prediction />
      </div>
      <Footer />
    </>
  );
}

export default App;
