import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contactme.css";
import { MdOutlineMail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import { Fade } from "react-awesome-reveal";
import Nav from "../Nav/Nav";

function ContactMe() {
  const form = useRef();
  const input = useRef();
  const input1 = useRef();
  const input2 = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ly85eqs', 'template_yfr1ld7', form.current, 'mNqUYSf5n2hx_U3ei')
     .then((result) => {
         console.log(result.text,"send");
     }, (error) => {
         console.log(error.text,"error");
     });

    input.current.value = "";
    input1.current.value = "";
    input2.current.value = "";
  };

  return (<>
  <Nav/>
  
  
    <section id="contactMe">
      <div className="container">
        <div className="row">
        <div className="col-sm-12 col-md-6">
          <form ref={form} onSubmit={sendEmail}>
            <Fade direction="left" triggerOnce={true}>
              <h2>Just say Hello</h2>
            </Fade>
            <Fade direction="left" triggerOnce={true}>
              <div id="name">
                <input
                  ref={input}
                  type="text"
                  minLength={3}
                  name="user_name"
                  required
                />
                <label>your name</label>
              </div>
              <div id="email">
                <input type="email" ref={input1} name="user_email" required />
                <label>your email</label>
              </div>
              <div id="name" className="message">
                <textarea ref={input2} name="message" required />
                <label>your message</label>
              </div>
              <button type="submit" id="send">
                send message
              </button>
            </Fade>
          </form>
          </div>
          
          <div className="col-sm-12 col-md-6">
          <div id="contactInvo">
            <Fade direction="up" triggerOnce={true}>
              <h2>Contact Info</h2>
            </Fade>
            <Fade direction="right" triggerOnce={true}>
              <div id="infoIcon">
                <MdOutlineMail fontSize={"30px"} />
                <div>
                  <h3>email</h3>
                  <p>muhammedalbahle@gmail.com</p>
                </div>
              </div>

              <div id="infoIcon">
                <CiPhone />
                <div>
                  <h3>phone</h3>
                  <a href="https://wa.me/00905346833726">+905346833726</a>
                </div>
              </div>
              <div id="infoIcon">
                <LuMapPin />
                <div>
                  <h3>address</h3>
                  <p>istanbul/turkey</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        </div>
      </div>
    </section>
    </>  );
}

export default ContactMe;
