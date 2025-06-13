import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../componentes/header.jsx";
import "./no-verificado.css";

const no_verificado = () => {
  
  
  
  // ajá, ajá





  return (
    <div className="full-containerrr">
      <Header />
      <section id="warning">
        <h1 id="texto">Upss! Algo salió mal, no fuiste verificado correctamente, vuelve a intentarlo.</h1>
      </section>
    </div>
  );
};



export default no_verificado;