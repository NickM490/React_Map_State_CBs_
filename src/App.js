import React from 'react';
import logo from './logo.svg';
import './App.css';
import Iteration from './Components/Basic_Iteration';
import Groceries from './Components/Map_Iteration';
import MessageForm from './Components/MessageForm';
import MessageDisplay from './Components/MessageDisplay';
import { useState } from 'react';
import BoxForm from './Components/BoxGenerator';

function App() {
  const [currentMsg, setCurrentMsg] = useState("there are no messages");

  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( newMessage );
  }
  return (
    <>
    {/* <Iteration/> */}
    <Groceries/>
    <MessageForm onNewMessage= { youveGotMail } />
    <MessageDisplay message={ currentMsg }/>
    <BoxForm/>
    </>
  );
}

export default App;
