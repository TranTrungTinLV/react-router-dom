import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import About from './components/About';
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import Contact from "./components/Contact";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/admin" element={<Auth>
          <Admin/>
        </Auth>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/contact" element={<Contact/>}/>

        {/* Error 404 */}
        <Route path="*" element={<h1 style={{
          textAlign: "center"
        }}>404. Not Found</h1>}></Route>
        {/* Navbar */}
        <Route path="/navbar" element={<Navbar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
