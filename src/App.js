import './App.css';
import SearchAppBar from './components/appBar';
import FullWidthGrid from './components/infoPane';
import FootNav from  './components/footNav';
import React,{useState} from 'react';

function App() {

  const screenConfig = useState(0);

  return (
    <div>
        <SearchAppBar />
        <FullWidthGrid currentScreen={screenConfig[0]} />
        <br /><br /><br />
        <FootNav screenConfig={screenConfig}  />
    </div>
  );
}

export default App;
