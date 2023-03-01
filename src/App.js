import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';
import MovieDetails from './pages/movieDetails/MovieDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='movies/:type' element={<MovieList/>}/>
          <Route path='movie/:id' element={<MovieDetails/>}/>
          <Route path='/*' element={<h1>Error Page</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
