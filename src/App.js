import React from 'react'
import NavBar from './Components/NavBar';
import { FirstContent } from './Components/FirstContent';
import { SecondContent } from './Components/SecondContent';
import ThirdContent from './Components/ThirdContent';
import AddContent from './Components/AddContent';



function App() {
  return (
    <div>
      <NavBar />
      <FirstContent />
      <SecondContent />
      <ThirdContent />
      <AddContent/>

    </div>
  );
}

export default App;
