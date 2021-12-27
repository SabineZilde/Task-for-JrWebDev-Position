import "./App.css";
import Header from "./Components/Header/Header";
import Subscribe from "./Views/Subscribe/Subscribe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

function App() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let background = "background_img";

  if (isSmallScreen) {
    background = "background_img_small";
  };

  return (
    <div className={background}>
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