import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("dark")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, "1000")
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'darkgrey';
      showAlert("Dark Mode Enable", "success");
    } else {
      setMode('dark')
      document.body.style.backgroundColor = 'aliceblue';
      showAlert("Light Mode Enable", "danger");
    }
  }


  return (
    // <> called fragments
    <>
      <Router>
        <Navbar title={'Nav'} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path='/textform' element={<TextForm showAlert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
