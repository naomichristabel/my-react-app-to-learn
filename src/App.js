import KidContainer from './components/kids/KidContainer';
import Counter from './components/counter/Counter';
import classes from './App.module.css'
import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar';
import MyForm from './components/form/MyForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/kids" element={<KidContainer />} />
        <Route path="/form" element={<MyForm />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
