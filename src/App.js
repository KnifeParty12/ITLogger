import React, {useEffect,Fragment} from 'react';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
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
      <AddBtn/>
      <AddLogModal/>
        <Logs/>
    </div>
  </Fragment>;
};

export default App;
