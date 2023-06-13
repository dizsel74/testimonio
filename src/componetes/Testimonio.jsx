import React from "react";
import  "../hojas-de-estilo/Testimonio.css"

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio' 
      src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      alt={`Foto de ${props.name} ${props.apellido}`} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><b>{props.name} {props.apellido}</b> en {props.ciudad}</p>
        <p className='cargo-testimonio'> {props.carrera} en <b>{props.empresa}</b></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}
 Testimonio.defaultProps = {
  name:'Nombre',
  apellido:'Apellido',
  ciudad: 'Ciudad',
  carrera: 'Profesion',
  empresa: 'Empresa',
  imagen: 'Sarah',
  testimonio: 'lorem ipsum lorem ipsum lorem ipsum',
}
export default Testimonio;