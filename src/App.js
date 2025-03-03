import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import mapPoly from './polyfills/map-poly';
import callBindApply from './utils/call-bind-apply';
import Modal from './components/Modal';
import ReduceFunction from './utils/reducer';
import { useEffect, useState } from 'react';

function App() {
  // mapPoly();
  // callBindApply();

  const [temp, setTemp] = useState(0);

  useEffect(() => {
    setTemp(prev => prev + 1);
    console.log("run");
  }, [])
  return (
    <>
      <ReduceFunction />
      {/* <Modal /> */}
      {/* <Navbar title="TextUtils" aboutUs="About us" />
      <Router>
        <Routes>
          <Route path='/' element={<TextForm />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router> */}

    </>
  );
}
// temp

export default App;

