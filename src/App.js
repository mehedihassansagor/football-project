import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import FourthPage from "./Components/FourthPage/FourthPage";
import Home from "./Components/Home/Home";
import SecondpageA from "./Components/SecondpageA/SecondpageA";
import Secondpageb from "./Components/Secondpageb/Secondpageb";
import Thirdpage from "./Components/Thirdpage/Thirdpage";

function App() {
  return (
    <BrowserRouter>
      <div className="text-center my-5">
        <Link to="/" className="link">Home</Link>
        <Link to="/page-5" className="link">Data Table</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-2" element={<SecondpageA />} />
        <Route path="/page-3" element={<Secondpageb />} />
        <Route path="/page-4" element={<Thirdpage />} />
        <Route path="/page-5" element={<FourthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
