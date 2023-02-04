import KidContainer from './components/kids/KidContainer';
import Counter from './components/counter/Counter';
import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar';
import MyForm from './components/form/MyForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quotes from "./components/quotes/Quotes";

function App() {


  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/kids" element={<KidContainer />} />
        <Route path="/form" element={<MyForm />} />
        <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
