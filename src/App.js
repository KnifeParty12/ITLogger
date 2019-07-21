import React, {useEffect,Fragment} from 'react';
import Logs from './components/logs/Logs';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';

const App = () => {
  useEffect(()=>{
    // Init Materialize JS
    M.AutoInit();
  });
  return <Fragment>
    <SearchBar/>
    <div className="container">
        <Logs/>
    </div>
  </Fragment>;
};

export default App;
