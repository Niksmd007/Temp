// import './App.css';
import axios from 'axios';
import ListView from './components/ListView';

function AxiosApiCall () {
  axios.get("https://backend.offbeat.today/news-v2/?format=json")
  .then(response => {
    console.log(response);
    return <h1>response.data</h1>
  })
  .catch(err => {
    console.log(err);
    return <h1>err</h1>
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListView />
      </header>
    </div>
  );
}

export default App;
