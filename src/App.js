import Header from "./Components/header/Header";
import HeroesList from "./Components/heroesList/HeroesList";
import RegistrationInputs from "./Components/registration/RegistrationInputs";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { useSelector } from "react-redux";

function App() {
  const { registration } = useSelector(state => state);
  const name = localStorage.getItem("nameOfUser");
  if (!name) {
    return <RegistrationInputs />
  }
  return (
    <Router>

      <main>
        <Routes>
          <Route path="/auth" element={<RegistrationInputs />} />
          <Route />
          <Route path="/" element={<HeroesList />} />
        </Routes>

      </main>
    </Router>

  );
}

export default App;
