import './App.css';
import Home from "./Home"
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import NotFound from './NotFound';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ViewUser from './ViewUser';

function App() {
  return (
    
    <div className="App">
       
       <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/:id" element={<ViewUser />} />
        <Route element={NotFound} />
        </Routes>
      
    </div>
    
  );
}

export default App;
