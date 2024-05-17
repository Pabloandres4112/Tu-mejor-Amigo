import React, { useState } from 'react';
import LogoFondo from '../assets/imgs/bg.svg';

const petsData = [
  { id: 1, name: 'Karsten', breed: 'Bulldog', image: 'path/to/bulldog.jpg' },
  { id: 2, name: 'Alban', breed: 'Corgi', image: 'path/to/corgi.jpg' },
  { id: 3, name: 'Reigner', breed: 'Bulldog', image: 'path/to/bulldog2.jpg' },
  { id: 4, name: 'Alex', breed: 'Siamese', image: 'path/to/siamese.jpg' },
  { id: 5, name: 'Ariana', breed: 'Graycat', image: 'path/to/graycat.jpg' },
];

function InfoPest() {
  const [pets, setPets] = useState(petsData);

  const handleAddPet = () => {
    // Implementar funcionalidad para añadir mascota
  };

  const handleEditPet = (id) => {
    // Implementar funcionalidad para editar mascota
  };

  const handleDeletePet = (id) => {
    setPets(pets.filter(pet => pet.id !== id));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-blue-900 rounded-lg p-6 w-80">
        <button
          className="bg-green-500 text-white w-full py-2 rounded mb-4"
          onClick={handleAddPet}
        >
          + Adicionar
        </button>
        {pets.map(pet => (
          <div
            key={pet.id}
            className="bg-white rounded-lg flex items-center mb-4 p-2 shadow"
          >
            <img
              src={pet.image}
              alt={pet.name}
              className="rounded-full w-12 h-12 mr-4"
            />
            <div className="flex-grow">
              <h3 className="font-semibold">{pet.name}</h3>
              <p className="text-gray-600">{pet.breed}</p>
            </div>
            <div className="flex">
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoPest;
