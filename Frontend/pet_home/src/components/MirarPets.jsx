import React, { useState, useEffect } from 'react';
import close from "../assets/imgs/btn-close.svg";
import fondo from "../assets/imgs/bg.svg";
import Perro1 from "../assets/imgs/photo-sm-1.svg";
import axios from 'axios';

function MirarPets() {
  const [mascota, setMascota] = useState(null);

  useEffect(() => {
    // Realizar la solicitud GET para obtener la información de la mascota con ID 11
    axios.get('http://localhost:3500/BuscarPets/1')
      .then(response => {
        // Actualizar el estado mascota con los datos recibidos
        setMascota(response.data);
      })
      .catch(error => {
        // Manejar los errores
        console.error('Error al obtener la mascota:', error);
      });
  }, []); // El array vacío como segundo argumento hace que el efecto se ejecute solo una vez, cuando el componente se monta

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative overflow-hidden rounded-3xl shadow-lg bg-white">
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${fondo})`, height: "850px", width: "500px" }}></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end mb-52">
        <div className="flex justify-between items-center mb-16 relative z-10 w-full h-16 pr-6">
          <h1 className="text-white text-lg pl-10">Info</h1>
          <button className="flex rounded-full w-8 h-8 justify-center items-center">
            <img src={close} alt="Cerrar" className="w-full h-full rounded-full" />
          </button>
        </div>

          {/* Mostrar la información de la mascota si está disponible */}
          {mascota && (
            <>
              <div className="flex justify-center items-center mb-28 mt-24 ">
                {/* Renderizar la foto de la mascota o la foto predeterminada si no hay foto disponible */}
                <img src={mascota.photo || Perro1} alt={mascota.nombre} className="rounded-full w-48 h-48 absolute" />
              </div>

              <div className="bg-gray-800 text-white w-10/12  rounded-2xl flex items-center relative z-10 mb-4 justify-between m-6 ">
                <div className='bg-slate-300  rounded-l-xl h-11 justify-center items-center flex w-24'>
                  <h1 className="mr-4 text-cyan-900 font-bold">Nombre:</h1>
                </div>
                <div className="font-semibold w-44 flex ">
                  <h1>{mascota.nombre}</h1>
                </div>
              </div>

              <div className="bg-gray-800 text-white w-10/12  rounded-2xl flex items-center relative z-10 mb-4 justify-between">
                <div className='bg-slate-300 rounded-l-xl h-11 justify-center items-center flex w-24'>
                  <h1 className="mr-4 text-cyan-900 font-bold">Raza:</h1>
                </div>
                <div className="font-semibold w-44 flex ">
                  <h1>{mascota.raza}</h1>
                </div>
              </div>

              <div className="bg-gray-800 text-white w-10/12  rounded-2xl flex items-center relative z-10 mb-4 justify-between">
                <div className='bg-slate-300 rounded-l-xl h-11 justify-center items-center flex w-24'>
                  <h1 className="mr-4 text-cyan-900 font-bold">Categoría:</h1>
                </div>
                <div className="font-semibold w-44 flex ">
                  <h1>{mascota.categoria}</h1>
                </div>
              </div>

              <div className="bg-gray-800 text-white w-10/12  rounded-2xl flex items-center relative z-10 mb-4 justify-between">
                <div className='bg-slate-300 rounded-l-xl h-11 justify-center items-center flex w-24'>
                  <h1 className="mr-4 text-cyan-900 font-bold">Género:</h1>
                </div>
                <div className="font-semibold w-44 flex ">
                  <h1>{mascota.genero}</h1>
                </div>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default MirarPets;
