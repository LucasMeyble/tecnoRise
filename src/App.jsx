import React from 'react';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Modal from './components/modal/Modal';

function App() {
  const { isOpen } = useSelector((store) => store.modal);

  return (

    <div>
      {isOpen && <Modal />}
      <Home /> 
    </div>
  )
}

export default App
