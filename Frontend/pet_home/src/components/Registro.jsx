import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import close from "../assets/imgs/btn-close.svg";
import fondo from "../assets/imgs/bg.svg";
import iconFoto from "../assets/imgs/icon-camera.svg";
import Aumentar from "../assets/imgs/arrows.svg";
import Agregar from '../assets/imgs/btn-save.svg';
import Foto from "../assets/imgs/photo-lg-0.svg";

function RegistroPets() {
  const [formData, setFormData] = useState({
    nombre: '',
    race_id: '',
    category_id: '',
    gender_id: '',
    user_id: '', // Asigna el user_id si es necesario
  });

  const [races, setRaces] = useState([]);

  useEffect(() => {
    const fetchRaces = async () => {
      try {
        const response = await axios.get('http://localhost:3500/races');
        setRaces(response.data);
      } catch (error) {
        console.error('Error fetching races:', error);
      }
    };

    fetchRaces();
  }, []);
  
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append('nombre', formData.nombre);
    data.append('race_id', formData.race_id);
    data.append('category_id', formData.category_id);
    data.append('gender_id', formData.gender_id);
    data.append('user_id', formData.user_id);
    if (file) {
      data.append('photo', file);
    }
  
    try {
      const response = await axios.post('http://localhost:3500/RegustroPets', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error al registrar la mascota:', error);
    }
  };

  

  
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 min-h-screen">
      <div className="relative w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg p-6 h-screen justify-center overflow-hidden shadow-lg">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${fondo})` }}></div>

        <div className="flex justify-between items-center mb-16 relative z-10 w-full h-10 mt-9">
          <h1 className="text-white text-lg pl-10">Registrar Mascota</h1>
          <button className="flex rounded-full w-8 h-8 justify-center items-center">
            <img src={close} alt="Cerrar" className="w-full h-full rounded-full" />
          </button>
        </div>

        <div className="flex justify-center items-center mb-24 mt-24">
          <img src={Foto} alt="Perro1" className="rounded-full w-32 h-32 absolute" />
        </div>

        <form onSubmit={handleSubmit} className="relative z-10">
          <div className="bg-gray-400 w-full rounded-full flex items-center relative">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Nombre"
              className="bg-transparent text-black placeholder-white rounded-md p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ placeholderColor: 'white' }}
            />
          </div>

          <div className="bg-gray-400 w-full rounded-full flex items-center relative mt-5 h-10">
  <select
    id="race_id"
    name="race_id"
    value={formData.race_id}
    onChange={handleInputChange}
    className="bg-transparent text-black placeholder-white rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full relative"
  >
    <option value="" disabled>Seleccione raza</option>
    {races.map(race => (
      <option key={race.id_race} value={race.id_race} title={`Descripción de la raza: ${race.description}`}>{race.name_race}</option>
    ))}
  </select>

  <div className="ml-auto flex space-x-2">
    <button>
      <img src={Aumentar} alt="Mostrar" className="w-14 h-5 rounded-r-xl" />
    </button>
  </div>
</div>



          <div className="bg-gray-400 w-full h-10 rounded-full flex items-center relative z-10 mt-4">
            <select
              id="category_id"
              name="category_id"
              value={formData.category_id}
              onChange={handleInputChange}
              className="bg-transparent text-black placeholder-white rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full relative"
            >
              <option value="" disabled>Seleccione categoría</option>
              <option value="1">Perro</option>
              <option value="2">Gato</option>
              <option value="3">Ave</option>
              <option value="4">Reptil</option>
              {/* Añadir más opciones según sea necesario */}
            </select>
            <button
              type="button"
              onClick={() => handleButtonClick('category_id')}
              className="absolute right-0 top-0 h-full rounded-r-full bg-gray-400 flex items-center px-2"
            >
              <img src={Aumentar} alt="Mostrar" className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-gray-400 w-full h-10 rounded-full flex items-center relative z-10 mt-4">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <input
              type="text"
              placeholder="Cambiar Foto"
              className="bg-transparent text-black placeholder-white rounded-md p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ placeholderColor: 'white' }}
              readOnly
            />
            <div className="ml-auto flex space-x-2">
              <button type="button" onClick={handleButtonClick}>
                <img src={iconFoto} alt="Mostrar" className="w-14 h-5 rounded-r-xl" />
              </button>
            </div>
          </div>

          <div className="bg-gray-400 w-full h-10 rounded-full flex items-center relative z-10 mt-4">
  <select
    id="gender_id"
    name="gender_id"
    value={formData.gender_id}
    onChange={handleInputChange}
    className="bg-transparent text-black placeholder-white rounded-md p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full relative"
  >
    <option value="" disabled>Seleccione género</option>
    <option value="1">Macho</option>
    <option value="2">Hembra</option>
    {/* Añadir más opciones según sea necesario */}
  </select>
  <button
    type="button"
    onClick={() => handleButtonClick('gender_id')}
    className="absolute right-0 top-0 h-full rounded-r-full bg-gray-400 flex items-center px-2"
  >
    <img src={Aumentar} alt="Mostrar" className="w-5 h-5" />
  </button>
</div>

          <div className="flex justify-center items-center h-24 mt-4">
            <button type="submit" className="flex justify-center items-center">
              <img src={Agregar} alt="Actualizar" className="w-full h-full rounded-full absolute" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistroPets;