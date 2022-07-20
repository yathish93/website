import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./components/about";
import Services from "./components/services";
import Practices from "./components/practices";
import emailjs from "@emailjs/browser";
import DataServices from "./components/dataservices";

function App() {
  const form = useRef();
  const [formOpen, setFormOpen] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9vyzaie",
        "template_7mch9vv",
        form.current,
        "O8Gs0mH_WkVC5FGSW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormOpen(false);

          alert("Done! we will contact you soon..");
        },
        (error) => {
          console.log(error.text);
          setFormOpen(false);
          alert("couldn't able to send message!  ");
        }
      );
  };

  return (
    <Router>
      <div className={formOpen ? "contact-form" : "hide"}>
        <form id="form" ref={form} onSubmit={sendEmail}>
          <div
            className="close-button"
            onClick={() => {
              setFormOpen(false);
            }}
          >
            X
          </div>
          <div class="field">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="form-input"
              id="from_name"
              required
            />
          </div>
          <div class="field">
            <input
              type="email"
              name="from_email"
              placeholder="E-mail Address"
              className="form-input"
              id="from_email"
              required
            />
          </div>
          <div class="field">
            <input
              type="text"
              name="from_phone"
              placeholder="Phone Number"
              className="form-input"
              id="from_phone"
            />
          </div>
          <>
            <textarea
              type="text"
              name="message"
              placeholder="Tell Us About Your Project"
              className="form-input"
              id="message"
            />
          </>
          <div className="center">
            <input
              type="submit"
              className="form-submit-button callbutton4"
              id="button"
              value="Send a message"
            />
          </div>
        </form>
      </div>
      <div>
        <Navbar setFormOpen={setFormOpen} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Main setFormOpen={setFormOpen} />}
          ></Route>
          <Route
            exact
            path="/data-service"
            element={<DataServices setFormOpen={setFormOpen} />}
          ></Route>
          <Route
            exact
            path="/services"
            element={<Services setFormOpen={setFormOpen} />}
          ></Route>
          <Route
            exact
            path="/practices"
            element={<Practices setFormOpen={setFormOpen} />}
          ></Route>
          <Route
            exact
            path="/about"
            element={<About setFormOpen={setFormOpen} />}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
