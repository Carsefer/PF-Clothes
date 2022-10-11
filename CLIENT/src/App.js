import { Route, Routes } from "react-router-dom";
import LandingHome from "./components/LandingHome/LandingHome";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingHome />} />
      </Routes>
    </>
  );
}

export default App;
