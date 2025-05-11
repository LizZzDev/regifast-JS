import React, { useState } from "react";
import Header from "./componentes/Header";
import "./registro.css";

const RegistroEmpresa = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    correo: "",
    telefono: "",
    rfc: "",
    actividades: "",
    vacantes: "",
    password: "",
    confirmPassword: "",
    calle: "",
    numero: "",
    colonia: "",
    codigo_postal: "",
    estado: "",
    municipio: "",
    imagen: null,
  });

  const [fuerzaColor, setFuerzaColor] = useState("");
  const [fuerzaTexto, setFuerzaTexto] = useState("");

  const contarPalabras = (texto) =>
    texto.trim().split(/\s+/).filter((palabra) => palabra.length > 0).length;

  const evaluarFuerzaContraseña = (password) => {
    let fuerza = 0;
    if (password.length >= 6) fuerza++;
    if (/[A-Za-z]/.test(password) && /\d/.test(password)) fuerza++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) fuerza++;
    return fuerza;
  };

  const manejarCambio = (e) => {
    const { name, value, files } = e.target;

    // Limitar la descripción a 150 palabras
    if (name === "descripcion") {
      const palabras = contarPalabras(value);
      if (palabras > 150) {
        alert("No puedes ingresar más de 150 palabras.");
        return;
      }
    }

    if (name === "imagen") {
      setFormData((prev) => ({ ...prev, imagen: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Evaluar la fuerza de la contraseña
    if (name === "password") {
      const fuerza = evaluarFuerzaContraseña(value);
      const textos = [
        "Contraseña muy débil",
        "Contraseña débil",
        "Contraseña media",
        "Contraseña fuerte",
      ];
      const colores = ["red", "orange", "goldenrod", "green"];
      setFuerzaTexto(textos[fuerza]);
      setFuerzaColor(colores[fuerza]);
    }
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
      return;
    }

    alert("Formulario enviado correctamente (simulado).");

    // Aquí iría tu lógica de envío con fetch o axios
  };

  return (
    <>
      <Header />
      <article id="Formulario">
        <section id="Titulo">
          <h1>PRACTICAS PROFESIONALES</h1>
        </section>
        <form onSubmit={manejarEnvio}>
          <fieldset>
            <legend>Datos Generales</legend>
            <input name="nombre" placeholder="Nombre de la empresa" required onChange={manejarCambio} />
            <input name="descripcion" placeholder="Descripción (máx. 150 palabras)" required value={formData.descripcion} onChange={manejarCambio} />
            <input type="email" name="correo" placeholder="Correo electrónico" required onChange={manejarCambio} />
            <input name="telefono" placeholder="Teléfono (10-15 dígitos)" pattern="\d{10,15}" required onChange={manejarCambio} />
            <input name="rfc" placeholder="RFC (12-13 caracteres alfanuméricos)" pattern="[A-Z0-9]{12,13}" required onChange={manejarCambio} />
            <input name="actividades" placeholder="Actividades que serán asignadas a los estudiantes" required onChange={manejarCambio} />
            <input name="vacantes" placeholder="Cantidad de vacantes" pattern="\d+" required onChange={manejarCambio} />
            <input type="password" name="password" placeholder="Contraseña" required onChange={manejarCambio} />
            <input type="password" name="confirmPassword" placeholder="Confirmar Contraseña" required onChange={manejarCambio} />
            {fuerzaTexto && (
              <div style={{ color: fuerzaColor, marginTop: "5px" }}>{fuerzaTexto}</div>
            )}
          </fieldset>

          <fieldset>
            <legend>Domicilio Fiscal</legend>
            <input name="calle" placeholder="Calle" required onChange={manejarCambio} />
            <input name="numero" placeholder="Número exterior (opcional)" onChange={manejarCambio} />
            <input name="colonia" placeholder="Colonia" required onChange={manejarCambio} />
            <input name="codigo_postal" placeholder="Código Postal (5 dígitos)" pattern="\d{5}" required onChange={manejarCambio} />
            <input name="estado" placeholder="Estado" required onChange={manejarCambio} />
            <input name="municipio" placeholder="Municipio" required onChange={manejarCambio} />
          </fieldset>

          <fieldset>
            <legend>Subir Logotipo</legend>
            <p>Sube el logotipo de tu empresa en formato JPG o PNG</p>
            <input type="file" name="imagen" accept="image/png, image/jpeg" required onChange={manejarCambio} />
          </fieldset>

          <input id="MandarInformacion" type="submit" value="Guardar" />
        </form>
      </article>
    </>
  );
};

export default RegistroEmpresa;
