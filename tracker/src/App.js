import './App.css';
import Create from './Components/Create';
import { Routes, Route } from "react-router-dom";
import Read from './Components/Read';
import Update from "./Components/Update";

function App() {
  return (
    <div className="container" >
      
      <Routes>
        <Route exact path="/" element={<Create/>}/>
        <Route path="/read" element={<Read/>}/>
        <Route path="/update" element={<Update />}>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
