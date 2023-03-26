import './App.css';
import { useFetch } from './hooks/api/useFetch';
import { useContext } from 'react';
import { LocationContext } from './contexts/locationContext';
import MainContent from './components/MainContent';
import SideContent from './components/SideContent';
import LoadingPage from './components/LoadingPage';


function App() {
  const { city } = useContext(LocationContext)
  const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json'
  const { data, loading } = useFetch(url, city)
  return (
    <div className="App">
      <div className="container">
        {loading ? <LoadingPage /> : <><SideContent data={data} /> <MainContent data={data} /></>}
      </div>
    </div>
  );
}

export default App;
