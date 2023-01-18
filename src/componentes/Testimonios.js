import React from "react";
import '../styles/Testimonios.css'

function Testimonio(props) {
  return(
    <div className="contenedor--testimonio">

        <img src={require(`../assets/${props.imagen}.png`)}
          className="imagen--testimonio" 
          alt="Fotografia"/>

        <div className="contenedor--info-testimonio">
          
          <p className="nombre--testimonio">
          <strong>{props.nombre}</strong> in {props.pais}
          </p>
          <p className="cargo--testimonio">
          {props.cargo} at <strong>{props.empresa}</strong>
          </p>
          <p className="texto--testimonio">
          "{props.testimonio}"
          </p>

        </div>

    </div>
  )
}
export default Testimonio;