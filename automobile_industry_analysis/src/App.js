import './App.css';
import Navbar from "./components/Navbar.js"
import Data from "./components/Data.js"
import Header from './components/Header';

function App() {
  const report = <iframe className='report' title="Global Sales - Country wise Sales 2021" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMWUyOWVmNmUtYjU0YS00ODFmLWE4NmItOGQ0NjQwZmJjYzhkIiwidCI6ImE0ZjIzNDc2LWQwMmYtNDJkYS05Y2FjLTBjZWNiYTU3MmNlOSJ9" frameborder="0" allowFullScreen="true"></iframe>
  return (
    <>
      <Navbar />
      <div className="App">
        <Header />
        {/* <Data /> */}
        {/* <PowerBI /> */}
        {/* <iframe className='report' title="primary features" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=602bf297-b610-4dfd-8524-108530073caa&autoAuth=true&ctid=a4f23476-d02f-42da-9cac-0cecba572ce9&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameborder="0" allowFullScreen="true"></iframe> */}
        <div className='flexme'>
          {report}
        </div>
      </div>
    </>
  );
}

export default App;
