import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutUs="About us" />
      <Router>
        <Routes>
          <Route path='/' element={<TextForm />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;

