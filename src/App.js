import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Home } from './pages/home/Home';
import { Bio } from './pages/bio/Bio';
import { Grafika } from './pages/grafika/Grafika';
import Instalacja from './pages/instalacja/Instalacja';
import Malarstwo from './pages/malarstwo/Malarstwo';
import Inne from './pages/inne/Inne';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/bio" element={<Bio/>}></Route>
        <Route path="/grafika" element={<Grafika/>}></Route>
        <Route path="/instalacja" element={<Instalacja/>}></Route>
        <Route path="/malarstwo" element={<Malarstwo/>}></Route>
        <Route path="/inne" element={<Inne/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
