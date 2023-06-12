import React from "react";

function Testimonio(){
  return(
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio' 
      src={require('../imagenes/testimonio-Emma.png')}
      alt='Foto de usuario'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
        <p className='cargo-testimonio'>Ingeniero en Software en Spotify</p>
        <p className='texto-testimonio'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure sequi provident ullam quibusdam accusantium! Corporis, eos commodi. Sunt, nemo dolores cum, delectus quo rerum accusantium veniam inventore itaque, officiis aliquid."</p>
      </div>
    </div>
  );
}

export default Testimonio;