import PaginaHome from "./page/PaginaHome";
import "./App.module.css";
import { Routes, Route} from "react-router-dom";
import PaginaLive from "../src/page/PaginaLive";
import PaginaPush from "./page/PaginaPush";
import PaginaShop from "./page/PaginaShop";
import PaginaPack from "./page/PaginaPack";


function App() {
  return (
    <>     
      <Routes>
         <Route path="/" element={ <PaginaHome />} />
         <Route path="/live" element={<PaginaLive />} />
         <Route path="/push" element={<PaginaPush />} />
         <Route path="/shop" element={<PaginaShop />} />
         <Route path="/packs" element={<PaginaPack />} />

         
      </Routes>
    </>
  );
}

export default App;
