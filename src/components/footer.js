import logo from "../logo.png";
// import logo1 from "../images/Vector.png";
import logo6 from "../images/Vector1.png";
import logo2 from "../images/Vector2.png";
import logo3 from "../images/Vector3.png";
import logo4 from "../images/Vector4.png";
import logo5 from "../images/Vector5.png";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Footer() {
  const form = useRef();
  const [formOpen, setFormOpen] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9vyzaie",
        "template_9gyvzuo",
        form.current,
        "O8Gs0mH_WkVC5FGSW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormOpen(false);

          alert("Done!");
        },
        (error) => {
          console.log(error.text);
          setFormOpen(false);
          alert("couldn't able to send message!  ");
        }
      );
  };

  return (
    <div className="footer">
      <div className="col-1">
        <img src={logo} width="250px" alt="logo1" />
        <div className="social">
          {/* <img src={logo1} alt="logo1" style={{backgroundColor: 'gray'}}/> */}{" "}
          <a
            traget="_blank"
            href="https://www.instagram.com/aptonworks_official/?igshid=YmMyMTA2M2Y%3D"
          >
            <img src={logo6} alt="logo1" />
          </a>
          <img src={logo2} alt="logo1" />
          <a
            traget="_blank"
            href="https://www.facebook.com/AptonWorks-104798411844837"
          >
            <img src={logo3} alt="logo1" />
          </a>
          <img src={logo4} alt="logo1" />
          <img src={logo5} alt="logo1" />
        </div>
      </div>
      <div className="col-2">
        <ul>
          <li>
            <a href="/about"> About Us</a>
          </li>
          <li>
            <a href="/service"> Web3</a>
          </li>
          <li>
            <a href="#"> Smart Contracts</a>
          </li>
          <li>
            <a href="#"> Crypto Wallet</a>
          </li>
        </ul>
      </div>

      <div className="col-3">
        <ul>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>

      <div className="col-4">
        <p>
          Through its tech expertise and business intelligence, Apton Works
          helps companies to leverage their operations and clients.{" "}
        </p>
        <form className="search-bar" ref={form} onSubmit={sendEmail}>
          <input type="email" placeholder="Email Address" name="email" />
          <button type="submit" width="100%">
            {" "}
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
