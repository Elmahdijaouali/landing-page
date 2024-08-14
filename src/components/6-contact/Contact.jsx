import './contact.css' ;
import Lottie from "lottie-react";
import doneAnimation from "../../animations/done.json"
import contact_usAnimation from "../../animations/contact.json"
// npm install @formspree/react
import { useForm, ValidationError } from '@formspree/react';

export default function Contact(){
   const [state, handleSubmit] = useForm("xblrynzl");
  
    return (
   
  <div className='contact' id="CONTACT">
     <div className='left-section'>
               <div>
                  <h1><i class="fa-solid fa-envelope"></i> Contact us</h1>
                  <p>contact us for more information and get notified  when I publish something new .</p>
               </div>
               <div> 
          
                <form  onSubmit={handleSubmit}>
                    <div>
                       <label>Email Address :</label>
                       <input type="email" autoComplete='off' required id='email' name='email' placeholder='Enter email address' />
                    </div>
                       <ValidationError style={{color:"red"}}
                         prefix="Email" 
                         field="email"
                         errors={state.errors}
                        />
                    <div>
                       <label>Your Message :</label>
                       <textarea required id='message' name='message' placeholder='Enter your message'>

                       </textarea>
                    </div>
                       <ValidationError style={{color:"red"}}
                         prefix="Message" 
                         field="message"
                         errors={state.errors}
                        />
                    <button type='submit'  disabled={state.submitting} id='btn_send_message'>
                      { state.submitting ? "Submitting ..." : "Submit"}
                    </button>
                    {
                     state.succeeded && ( <p id='messageSubmitting'><Lottie loop={false} className='animationDone'  animationData={doneAnimation} /><span> your message has been sent successfully </span></p>)
                    }
                    {
                     state.errors && ( <p>errors ,message not sent !!! </p>)
                    }
                </form>
             </div>
             </div>

       <div className='right-section'>
           <Lottie className='animation'  animationData={contact_usAnimation} />
       </div>
       
     </div>
  
    )
}