import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

const Landing= () => {

  return(

    <div className="App container">


      <div className='profile'>
      <img src='./images/IMG_6429-removebg-preview.png' alt='profile-img' className='profile-img  img-fluid' id='profile__img'/>
      <p className='p1'>Emmanuel</p>

      <div className='share-img'>
        <i className="fa fa-share share-icon" aria-hidden="true"></i>
      </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 md-6 sm-6  con1'>    
               <p className='text-center padding-con' id='twitter'>_Emmaxfans</p>           
          </div>

        </div>

        <div className='row conx' >
          <div className='col-lg-12 md-6 sm-6  con1'>  
               <p className='text-center padding-con' id='slack'>Emmax</p>         
          </div>

        </div>

        <div className='row'>
          <div className='col-lg-12 md-6 sm-6  con1'>
            
              <a href='https://training.zuri.team' id='btn__zuri'>
              <p className='text-center padding-con'>Zuri Team</p>
            
            </a>  
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12 md-6 sm-6  con1'>
              <a href='https://books.zuri.team/' id='books'>
               <p className='text-center padding-con'>Zuri Books</p>
              </a>   
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12 md-6 sm-6  con1'>
              <a href='https://books.zuri.team/python-for-beginners?ref_id=<Emmanuel Adewoye>' id='books__python'>
               <p className='text-center padding-con'>Python Books</p>
              </a>  
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12 md-6 sm-6  con1'>
              <a href='https://background.zuri.team' id='pitch'>
               <p className='text-center padding-con'>Background Check for coders</p>
              </a>  
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12 md-6 sm-6  con1'>
              <a href='https://books.zuri.team/design-rules' id='book_design'>
               <p className='text-center padding-con'>Design Books</p>
              </a>   
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12 md-6 sm-6  con1'>
              <Link to='/contact' id='contact'>
               <p className='text-center padding-con'>Contact</p>
              </Link>  
          </div>
        </div>
      </div>

      <div className='text-center con2'>
        <a href='https://app.slack.com/client/T042F7V19Q8/C041JU70S5U/rimeto_profile/U048PA3FA66' id='Emmax'>
        <img src='./images/slack.png' alt='slack-logo' className='slack-img'/>
        </a>
        <a href='https://github.com/Emmaxfans'>
        <img src='./images/github (2).png' alt='github-logo' className='git-img'/>
        </a>

      </div>

      <div className='container-fluid con3'>
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
  )
    
};
export default Landing;