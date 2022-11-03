import { BrowserRouter as Router, Routes, Route } from  "react-router-dom";
import './App.css'

import Landing from './Pages/Landing'
import Contact from "./Pages/Contact";



export const App =() => {
  return (
    <div>

      <Router>
      <Routes>

      <Route path='/' element={<Landing />} />
      <Route path='/contact' element={<Contact />} />


      </Routes>
      </Router>
      
    </div>
    
  );
}

// export default App;
