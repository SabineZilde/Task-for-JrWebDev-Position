import "./App.css";
import Header from "./Components/Header/Header";
import Subscribe from "./Views/Subscribe/Subscribe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="background_img">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Subscribe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
