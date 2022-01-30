import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home';
import Detail from './components/Detail.jsx';
import PokemonCreate from './components/PokemonCreate';


function App() {
  return (
    <Routes>
       <Route exact path='/' element={<LandingPage/>}/>
       <Route path='/pokemons' element={<Home/>}/>
       <Route path='/createpokemon' element= {<PokemonCreate/>}/>
       <Route path='/pokemons/:id' element= {<Detail/>}/>
    </Routes>    
  );
}

export default App;
