import React, { useState, useEffect } from 'react';
import close from "../assets/imgs/btn-close.svg";
import Agregar from "../assets/imgs/btn-add.svg";
import fondo from "../assets/imgs/bg.svg";
import Perro1 from "../assets/imgs/photo-lg-0.svg"; // Importamos la imagen predeterminada
import Mostrar from "../assets/imgs/btn-show.svg";
import Editar from "../assets/imgs/btn-edit.svg";
import Eliminar from "../assets/imgs/btn-delete.svg";
import axios from 'axios';

function Home() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3500/ListarTodosPets')
      .then(response => {
        // Actualizar el estado `mascotas` con los datos recibidos
        setMascotas(response.data);
      })
      .catch(error => {
        console.error('Error al obtener la lista de mascotas:', error);
      });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-blue-900 rounded-lg p-6 h-screen justify-center overflow-y-scroll">
        <div className="absolute inset-0 bg-no-repeat bg-cover opacity-20" style={{ backgroundImage: `url(${fondo})` }}></div>
        
        <div className="flex justify-between items-center mb-6 relative z-10 w-full h-10 mt-8">
          <h1 className="text-white text-lg pl-10">Administrar mascotas</h1>
          <button className="flex rounded-full w-8 h-8 justify-center items-center">
            <img src={close} alt="Cerrar" className="w-full h-full rounded-full" />
          </button>
        </div>
        
        <div className="flex justify-center items-center mb-4">
          <button className="flex justify-center items-center ml-3">
            <img src={Agregar} alt="adicionar" className="w-full h-full rounded-full" />
          </button>
        </div>
        
        {mascotas.map((mascota, index) => (
          <div key={index} className="bg-gray-400 w-full p-4 rounded-2xl flex items-center relative z-10 mb-4">
            {/* Agregar registro de consola para verificar la ruta de la imagen */}
            {console.log("Ruta de la imagen:", mascota.photo)}
            {/* Renderizamos la imagen de la mascota o la imagen predeterminada si no hay imagen */}
            <img src={`http://localhost:3500${mascota.photo ? mascota.photo : `${Perro1}`}`} alt={mascota.nombre} className="rounded-full w-16 h-16 mr-4" />
            <div className="ml-4 text-cyan-950 font-semibold">
              <h1>{mascota.nombre}</h1>
              <h2>{mascota.raza}</h2>
            </div>
            <div className="ml-auto flex space-x-2">
              <button><img src={Mostrar} alt="Mostrar" className="w-6 h-6" /></button>
              <button><img src={Editar} alt="Editar" className="w-6 h-6" /></button>
              <button><img src={Eliminar} alt="Eliminar" className="w-6 h-6" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
