import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "@components/Header/Header.jsx";
import MainPage from "@pages/MainPage/MainPage";
import MoviePage from "@pages/MoviePage/MoviePage";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
