import Home from '../components/pages/Home';
import Header from '../components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dinamic from '../components/pages/Dinamic';


function App() {
  return (
  <Router>
    <div className="App">
      <Header/>
    </div>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/:id" element={<Dinamic/>} />
  </Routes>
  </Router>
  );
}

export default App;
