import './App.css';
import Appbar from './components/Appbar/Appbar';
import Home from './components/Home/Home';
import Cursos from './components/Cursos/Cursos'
import OrgEventos from './components/Cursos/Activos/OrgEventos'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/organizacioneventos" element={<OrgEventos />} />
      </Routes>
    </Router>
  {/*   <Appbar />
    <Home />
    <Cursos /> */}
    </>
  );
}

export default App;
