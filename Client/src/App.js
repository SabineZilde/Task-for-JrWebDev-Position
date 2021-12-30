import "./App.css";
import Header from "./Components/Header/Header";
import Subscribe from "./Views/Subscribe/Subscribe";
import Success from "./Views/Success/Success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

function App() {
    const isSmallScreen = useMediaQuery({ query: "(max-width: 520px)" });
    const isMidleScreen = useMediaQuery({ query: "(min-width: 520px)" });
    const isLargeScreen = useMediaQuery({ query: "(min-width: 1000px)" });

    let background = "background_img";

    if (isSmallScreen) {
        background = "background_img_small";
    };

    if (isMidleScreen) {
        background = 'background_img_middle';
    };

    if (isLargeScreen) {
        background = 'background_img';
    };

    return (
        <div className={background}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Subscribe />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
