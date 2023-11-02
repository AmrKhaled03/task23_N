import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Menu from './components/Menu';
import Specials from './components/Specials';
import Contact from './components/Contact';
import './styles.css';
import Home from './Home';
const App = () => {
  const [specialsList, setSpecialsList] = useState([]);
  const [nextSpecialId, setNextSpecialId] = useState(1); 

  const addToSpecials = (item) => {
    const itemExists = specialsList.some((special) => special.title === item);

    if (!itemExists) {
      const newItem = { id: nextSpecialId, title: item };
      setSpecialsList([...specialsList, newItem]);
     setNextSpecialId(nextSpecialId + 1);
    }
  };

  // };
  const removeItems=()=>{
    setSpecialsList([]);
  }

  return (
    <Router>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu  addToSpecials={addToSpecials} specialsList={specialsList}/>} />
        <Route path="/specials" element={<Specials specialsList={specialsList} removeItems={removeItems}  />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
