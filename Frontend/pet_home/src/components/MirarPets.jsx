import React from 'react';
import close from "../assets/imgs/btn-close.svg";
import fondo from "../assets/imgs/bg.svg";
import Perro1 from "../assets/imgs/photo-sm-1.svg";

function MirarPets() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 min-h-screen">
      <div className="relative w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg p-6 h-screen justify-center overflow-hidden shadow-lg">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fondo})` }}
        ></div>

        <div className="flex justify-between items-center mb-16 relative z-10 w-full h-10 mt-9 ">
          <h1 className="text-cyan-900 font-bold">Consulta</h1>
          <button className="flex rounded-full w-8 h-8 justify-center items-center bg-white hover:bg-gray-300 transition-colors duration-150">
            <img src={close} alt="Cerrar" className="w-full h-full rounded-full" />
          </button>
        </div>

        <div className="flex justify-center items-center mb-28 mt-24">
          <img src={Perro1} alt="Perro1" className="rounded-full w-48 h-48 absolute" />
        </div>

        {/* Ejemplo de contenedor de nombre y datos */}
        <div className="bg-gray-800 text-white w-full rounded-2xl flex items-center relative z-10 mb-4 justify-between">
          <div className='bg-slate-300  rounded-l-xl h-11 justify-center items-center flex w-24'>
            <h1 className="mr-4 text-cyan-900 font-bold">Nombre:</h1>
          </div>
          <div className="font-semibold w-44 flex ">
            <h1>Karsten</h1>
          </div>
        </div>

        
        <div className="bg-gray-800 text-white w-full rounded-2xl flex items-center relative z-10 mb-4 justify-between">
          <div className='bg-slate-300 rounded-l-xl h-11 justify-center items-center flex w-24'>
            <h1 className="mr-4 text-cyan-900 font-bold">Nombre:</h1>
          </div>
          <div className="font-semibold w-44 flex ">
            <h1>Otro Nombre</h1>
          </div>
        </div>


        <div className="bg-gray-800 text-white w-full rounded-2xl flex items-center relative z-10 mb-4 justify-between">
          <div className='bg-slate-300 rounded-l-xl h-11 justify-center items-center flex w-24'>
            <h1 className="mr-4 text-cyan-900 font-bold">Nombre:</h1>
          </div>
          <div className="font-semibold w-44 flex ">
            <h1>Otro Nombre</h1>
          </div>
        </div>


        <div className="bg-gray-800 text-white w-full rounded-2xl flex items-center relative z-10 mb-4 justify-between">
          <div className='bg-slate-300 rounded-l-xl h-11 justify-center items-center flex w-24'>
            <h1 className="mr-4 text-cyan-900 font-bold">Nombre:</h1>
          </div>
          <div className="font-semibold w-44 flex ">
            <h1>Otro Nombre</h1>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default MirarPets;
