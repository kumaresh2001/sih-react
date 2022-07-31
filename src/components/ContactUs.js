import React from 'react';
import emailjs from "emailjs-com";
import "../styles/contact.css";
import pic from "../assets/contactus.jpg";
import picNew from "../assets/contactBImg.jpg";
export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_qnfvpgo', 'template_179dvwg' , e.target, 'C_9M1HKQ7wdzQXo3q')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        alert("Thanks for contacting! We'll get back to you soon.")
    }

    return(
        <div>
            <div>
                <img src={picNew}></img>
            </div>
            <div className="container">
                <h1>GET IN TOUCH</h1>
                <p><i>Do you need help? That's what the Meraki team is for!</i></p>
                <p>Please submit your queries here, and we will get back to you as soon as possible.</p>
                <div class="row">
                    <div class="column">
                        <img src={pic} className = "contactImage"/>
                    </div>
                    <div class="column">
                        <form onSubmit={sendEmail}>
                            <div className="mainForm">
                                <div className="formItems">
                                    <input type="text" className="name" placeholder="Name" name="name" required/>
                                </div>
                                <div className="formItems">
                                    <input type="email" className="email" placeholder="Email Address" name="email" required/>
                                </div>
                                <div className="formItems">
                                    <input type="text" className="subject" placeholder="Subject" name="subject" required/>
                                </div>
                                <div className="formItems">
                                    <textarea className="message" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                                </div>
                                <div className="formSubmit">
                                    <input type="submit" className="submit" value="Send Message"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            
            </div>
        </div>
    )
}