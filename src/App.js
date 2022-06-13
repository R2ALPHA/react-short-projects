import { useState } from 'react';
import './App.css';

import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';
import Modal from "./components/Modal/Modal";

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return <div className="App">
    <h1>React Animations</h1>
    <Modal closed={closeModal} show={isModalOpen} />
    <Backdrop show={isModalOpen} />
    <button className="Button" onClick={showModal} >Open Modal</button>
    <h3>Animating Lists</h3>
    <List />
  </div>
};

export default App;
