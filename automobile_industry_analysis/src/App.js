import './App.css';
import Navbar from "./components/Navbar.js"
import Data from "./components/Data.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Data /> */}
      {/* <PowerBI /> */}
      <div className='flexme'>
        <iframe className='report' title="sample data analysis - Page 4" 
        width="300" height="113.5" src="https://app.powerbi.com/view?r=eyJrIjoiMjYwNTczNzgtNTI1Zi00YzllLWI2OTEtMThlY2ZkMjhhNjBjIiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9" frameborder="0" allowFullScreen="true"></iframe>
        <iframe className='report' title="sample data analysis - Page 4" 
        width="300" height="113.5" src="https://app.powerbi.com/view?r=eyJrIjoiMjYwNTczNzgtNTI1Zi00YzllLWI2OTEtMThlY2ZkMjhhNjBjIiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9" frameborder="0" allowFullScreen="true"></iframe>
      </div>
      {/* <div className='flexme'>
        <iframe className='report' title="sample data analysis - Page 4" 
        width="300" height="113.5" src="https://app.powerbi.com/view?r=eyJrIjoiMjYwNTczNzgtNTI1Zi00YzllLWI2OTEtMThlY2ZkMjhhNjBjIiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9" frameborder="0" allowFullScreen="true"></iframe>
        <iframe className='report' title="sample data analysis - Page 4" 
        width="300" height="113.5" src="https://app.powerbi.com/view?r=eyJrIjoiMjYwNTczNzgtNTI1Zi00YzllLWI2OTEtMThlY2ZkMjhhNjBjIiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9" frameborder="0" allowFullScreen="true"></iframe>
      </div> */}
    </div>
  );
}

export default App;
