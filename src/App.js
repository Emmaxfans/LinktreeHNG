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
      {/* <Route path='/contact' element={< />} /> */}

      </Routes>
      </Router>

      <div className='container con3'>
        <div className='row'>
          <div className='col-lg-4 md-4 sm-4'>
          <img src='./images/zurii.png' alt='zuri-logo' className='zuri-img'/>
          </div>

          <div className='col-lg-4 md-4 sm-4'>
          <p className='p2'>HNG Internship 9 Frontend Task</p>
          </div>

          <div className='col-lg-4 md-4 sm-4'>
          <img src='./images/logo2.b6de37f7d5d4c7f03d0.png' alt='slack-logo' className='ingressive-img img-fluid'/>
          </div>


         </div>

      </div>
      
    </div>
    
  );
}

// export default App;
