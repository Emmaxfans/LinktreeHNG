import React from "react";
import './Contact.css'

function Contact() {
  
  return(
<div className="container contact">


  <div className="container container1">

  <h1 className="h111">Contact me</h1>
  <p className="p-contact">Hi there, contact me to ask me about anything you have in mind.</p>
        
 <form action="/#" method="post" className="">

   <div class="input-con1">
     <label className="label1">First name</label>
    <input type="email" className="form-control" id="first_name" aria-describedby="" placeholder='Enter your first name'/>
   </div>

   <div class="input-con2">
   <label className="label1">Last name</label>
    <input type="email" className="form-control" id="last_name" aria-describedby="" placeholder='Enter your last name'/>
   </div>

   <div class="input-con3">
   <label className="label1">Email</label>
    <input type="email" class="form-control" id="email" aria-describedby="" placeholder='yourname@email.com'/>
   </div>
   <div class="input-con3">
   <label className="label1">Message</label>
   <textarea class="form-control" id="message" rows="3" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
   </div>

   <div className="input-con4">
   <input type="checkbox"></input>
   <p className="input-con5">You agree to providing your data to Emmax who may contact you.</p>
   </div>

   <button type="submit" id="btn__submit" class="btn btn-primary form-control mb-3 input-con3">Send Message</button>

 </form>

 </div>

       
</div>
  )
    
};

export default Contact