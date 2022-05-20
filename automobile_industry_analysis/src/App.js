import './App.css';
import Navbar from "./components/Navbar.js"
import PowerBI from "./components/PowerBI.js"
import Header from './components/Header.js';
import Report from './components/Report.js'
function App() {
  const report = <iframe className='report' title="Global Sales - Country wise Sales 2021" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMWUyOWVmNmUtYjU0YS00ODFmLWE4NmItOGQ0NjQwZmJjYzhkIiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9" frameborder="0" allowFullScreen="true"></iframe>
  return (
    <>
      <Navbar />
      <div className="App">
        <Header />
        <Report report={report} />
        <Report report={report} />
        <Report report={report} />
      </div>
    </>
  );
}

export default App;
