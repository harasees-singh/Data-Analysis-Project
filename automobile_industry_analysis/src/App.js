import './App.css';
import Navbar from "./components/Navbar.js"
import Data from "./components/Data.js"
import Header from './components/Header';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Header />
        {/* <Data /> */}
        {/* <PowerBI /> */}
        <div className='flexme'>
        <iframe className='report' title="primary features" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNjY1NmE4ZjEtN2M3Mi00YmMwLWE5NmYtMDdkNmJiMDJkNTRlIiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe></div>
      </div>
    </>
  );
}

export default App;
