import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.jpeg";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  useEffect(() => {
    const sub =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    return () => sub.unsubscribe();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      const msg = "Por favor, rellena todos los campos";
      setBanner(msg);
      toast.error(msg);
      return;
    }

    try {
      setBool(true);

      const res = await axios.post("/api/contact", {
        name,
        email,
        message,
      });

      if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      toast.error("Error al enviar el mensaje");
      console.log(error);
    } finally {
      setBool(false);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading
        subHeading="Mantengámonos en contacto"
        title="Contacta conmigo"
      />
      <div className="central-form">
        {/* IZQUIERDA */}
        <div className="left-side">
          <h2 className="title">
            <TypeAnimation
              sequence={["Ponte en contacto 📧", 1000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h2>

          <div className="icons">
            <a href="https://www.linkedin.com/in/sonia-soriano-rodr%C3%ADguez/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/Sonia-SSR2021">
              <i className="fa fa-github"></i>
            </a>
          </div>

          <div className="img-back">
            <h4>¡Envía tu correo aquí!</h4>
            <img src={imgBack} alt="contacto" />
          </div>
        </div>

        {/* DERECHA */}
        <div className="right-side">
          <form onSubmit={submitForm}>
            <p>{banner}</p>

            <label>Nombre</label>
            <input type="text" onChange={handleName} value={name} />

            <label>Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label>Mensaje</label>
            <textarea onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                Enviar
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img
                      src={require("../../images/load2.gif")}
                      alt="No se encontró la imagen"
                    />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
