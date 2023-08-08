
import { Routes,Route } from "react-router-dom";
import Todos from "./Components/Todos";
import NextPage from "./Components/NextPage";
function App() {

  return (
  <Routes>
    <Route path="/" element={<Todos/>}/>
    <Route path="/NextPage" element={<NextPage/>}/>
  </Routes>
  );
}

export default App;
