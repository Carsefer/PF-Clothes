
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import LandingHome from "./components/LandingHome/LandingHome";
function App() {
  return (
     <>
    <Routes>
      <Route path="/" element={<LandingHome/>}/>
     <Route path="*"element={<Footer/>} />
    </Routes>
  </>
  );
}

export default App;
