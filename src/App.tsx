
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        
import './App.css';
import PokemonList from './components/PokemonList/PokemonList';

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={PokemonList} />
          <Route path="/pokemon/:id" component={PokemonDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
