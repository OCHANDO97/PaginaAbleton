import PaginaHome from "./page/PaginaHome";
import "./App.module.css";
import { Routes, Route} from "react-router-dom";
import PaginaLive from "../src/page/PaginaLive";


function App() {
  return (
    <>     
      <Routes>
         <Route path="/" element={ <PaginaHome />} />
         <Route path="/live" element={<PaginaLive />} />
      </Routes>
    </>
  );
}

export default App;
