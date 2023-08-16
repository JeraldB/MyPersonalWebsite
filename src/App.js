import React from 'react'
import NavBar from './Components/NavBar';
import { FirstContent } from './Components/FirstContent';
import { SecondContent } from './Components/SecondContent';
import ThirdContent from './Components/ThirdContent';
import AddContent from './Components/AddContent';
import Form_Event  from './Components/form';


function App() {
  return (
    <div>
      <NavBar />
      <FirstContent />
      <SecondContent />
      <ThirdContent />
      <AddContent/>
      <Form_Event/>
    </div>
  );
}

export default App;
