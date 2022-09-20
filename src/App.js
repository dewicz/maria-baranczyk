import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Home } from './pages/home/Home';
import { Bio } from './pages/bio/Bio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/bio" element={<Bio/>}></Route>
        <Route path="/grafika" element={<Home/>}></Route>
        <Route path="/instalacja" element={<Home/>}></Route>
        <Route path="/malarstwo" element={<Home/>}></Route>
        <Route path="/inne" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
