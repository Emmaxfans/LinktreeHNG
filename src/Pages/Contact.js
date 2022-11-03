import React from "react";
import './Contact.css'

function Contact() {
  
  return(
<div className="container">
        
 <form>

   <div class="input-con">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Name'/>
   </div>

   <div class="input-con">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email Address'/>
   </div>
   <div class="input-con">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Your Passord'/>
   </div>

   <button type="submit" class="btn btn-primary form-control mb-3">Sign up</button>

    <center>
      <a className='' href='/#'><p>You already have an account</p></a>
    </center>

 </form>
        
       
</div>
  )
    
};

export default Contact