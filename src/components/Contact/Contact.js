import {
  faEnvelope, faMapMarkerAlt,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import React from "react";
import Footer from "../SharedComponents/Footer/Footer";
import "./Contact.scss";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bu9oqhx",
        "template_lwh1wca",
        e.target,
        "user_Y2VvIximudWt5Y32mZnuf"
      )
      .then(
        (result) => {
          console.log(alert("send successfully"));
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const resetFunction = (e) => {
    // console.log(e.target.id).reset();
    console.log("reset form");
    // const id = e.target.getAttribute("portfolio-form");
  };
  return (
    <section id='contact-form'>
      <div className='contact-heading'>
        <h2>contact</h2>
      </div>
      <div className='container'>
        <div className='contact-form-wrapper'>
          <div className='company-information'>
            <ul>
              <div>
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  &nbsp;&nbsp;&nbsp;address
                </li>
                <p>Buttonwood CA 91770, California.</p>
              </div>
              <div>
                {" "}
                <li>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  &nbsp;&nbsp;&nbsp;Lets Talk
                </li>
                <p>+1 253 565 2365</p>
              </div>
              <div>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  &nbsp;&nbsp;&nbsp;Sale Support
                </li>
                <p>support@shop-nyla.com</p>
              </div>
            </ul>
          </div>
          <div className='contact'>
            <h4>send us a message</h4>
            <form onSubmit={sendEmail} id='portfolio-form'>
              <p>
                <label>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='floatingName'
                  placeholder='Name'
                  name='name'
                />
              </p>

              <p>
                <label>Company</label>
                <input
                  type='text'
                  className='form-control'
                  id='floatingName'
                  placeholder='Company'
                  name='company'
                />
              </p>

              <p>
                <label>Email Address</label>
                <input
                  type='email'
                  className='form-control'
                  id='floatingInput'
                  placeholder='name@example.com'
                  name='email'
                />
              </p>
              <p>
                <label>Phone no</label>
                <input
                  type='number'
                  className='form-control'
                  id='floatingName'
                  placeholder='Phone Number'
                  name='phone'
                />
              </p>

              <p className='full-width'>
                <label>Message</label>
                <textarea
                  className='form-control'
                  placeholder='Leave a comment here'
                  id='floatingTextarea2'
                  style={{ width: "100%" }}
                  rows='5'
                  name='message'
                ></textarea>
              </p>

              <p className='full-width'>
                <button
                  onClick={() => resetFunction}
                  value='Reset'
                  type='submit'
                >
                  Send Message
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className='google-map'>
        <iframe
          title='google map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1435090089553!2d90.42196781429821!3d23.813495392281492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fb95f16c1%3A0xb333248370356dee!2sJamuna%20Future%20Park!5e0!3m2!1sen!2sbd!4v1622272644774!5m2!1sen!2sbd'
          width='100%'
          height='300'
          style={{ border: "0" }}
          loading='lazy'
        ></iframe>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
