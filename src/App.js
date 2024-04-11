import { ProgressBar } from './components/ProgressBar'; 
import { useState } from 'react';
import { AppContext } from './Context';
import './App.css';
import { Spacing } from './components/Spacing';
import { Cards } from './components/Cards';
import { Bottom } from './components/Bottom';
import { Success } from './components/Success';

function App() {

  const [progress, setProgress] = useState(1);
  const [selected, setSelected] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <AppContext.Provider value={{progress, setProgress, selected, setSelected, selectedCard, setSelectedCard}}>
    <div className="App">
      <div style={{width: '528px', 
      height: '', 
      margin: '0 auto', 
      backgroundColor: 'white', 
      padding: '25px 25px 0px 25px', 
      borderRadius: '10px',
      gap: '25px',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      }}>
      <ProgressBar /> 
      {progress === 3 ? (<Success selectedCard={selectedCard}/> ):( 
      <>
      <Spacing />
      <Cards />
      </>
    )}
      <Bottom/>


    </div>
    </div>
    </AppContext.Provider>
  );
}

export default App;
