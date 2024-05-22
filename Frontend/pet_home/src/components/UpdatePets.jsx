import React from 'react';
import close from "../assets/imgs/btn-close.svg";
import fondo from "../assets/imgs/bg.svg";
import iconFoto from "../assets/imgs/icon-camera.svg";
import Aumentar from "../assets/imgs/arrows.svg";
import Actalizar from "../assets/imgs/btn-update.svg";
import Perro1 from "../assets/imgs/photo-sm-1.svg"; // Cambié la importación para usar la imagen más grande

function UpdatePets() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 min-h-screen">
      <div className="relative w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4  rounded-lg p-6 h-screen justify-center overflow-hidden shadow-lg">
         <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fondo})` }}
        ></div>

        <div className="flex justify-between items-center mb-16 relative z-10 w-full h-10 mt-9 ">
          <h1 className="text-white text-lg pl-10">Actualizar mascota   </h1>
          <button className="flex rounded-full w-8 h-8 justify-center items-center">
            <img src={close} alt="Cerrar" className="w-full h-full rounded-full" />
          </button>
        </div>

        <div className="flex justify-center items-center mb-24 mt-24">
          {/* Ajusté el tamaño de la imagen */}
          <img src={Perro1} alt="Perro1" className="rounded-full w-32 h-32 absolute" />
        </div>

        <div className="bg-gray-400 w-full rounded-full flex items-center relative">
          <input
            type="text"
            placeholder="Nombre"
            className="bg-transparent text-black placeholder-white rounded-md p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ placeholderColor: 'white' }}
          />
        </div>

        <div className="bg-gray-400 w-full rounded-full flex items-center relative mt-5 h-10">
          <input
            type="text"
            placeholder="Seleccione raza"
            className="bg-transparent text-black placeholder-white rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ placeholderColor: 'white' }}
          />
          <div className="ml-auto flex space-x-2">
            <button>
              <img src={Aumentar} alt="Mostrar" className="w-14 h-5 rounded-r-xl" />
            </button>
          </div>
        </div>

        <div className="bg-gray-400 w-full h-10 rounded-full flex items-center relative z-10 mt-4">
          <input
            type="text"
            placeholder="Seleccione categoría"
            className="bg-transparent text-black placeholder-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ placeholderColor: 'white' }}
          />
          <div className="ml-auto flex space-x-2">
            <button>
              <img src={Aumentar} alt="Mostrar" className="w-14 h-5 rounded-r-xl" />
            </button>
          </div>
        </div>

        <div className="bg-gray-400 w-full h-10 rounded-full flex items-center relative z-10 mt-4">
          <input
            type="text"
            placeholder="Cambiar Foto"
            className="bg-transparent text-black placeholder-white rounded-md p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ placeholderColor: 'white' }}
          />
          <div className="ml-auto flex space-x-2">
            <button>
              <img src={iconFoto} alt="Mostrar" className="w-14 h-5 rounded-r-xl" />
            </button>
          </div>
        </div>

        <div className="bg-gray-400 w-full rounded-full flex items-center relative z-10 mt-4">
          <input
            type="text"
            placeholder="Seleccione género"
            className="bg-transparent text-black placeholder-white rounded-md p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ placeholderColor: 'white' }}
          />
          <div className="ml-auto flex space-x-2">
            <button>
              <img src={Aumentar} alt="Mostrar" className="w-14 h-5 rounded-r-xl" />
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center h-24">
          <button className="flex justify-center items-center">
            {/* Cambié el nombre de la imagen de Guardar a Actalizar */}
            <img src={Actalizar} alt="Actualizar" className="w-full h-full rounded-full absolute" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdatePets;
