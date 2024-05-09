import React from "react";
import LogoFondo from '../assets/imgs/bg-login.svg';

function Login() {
    return (
        <section className="relative min-h-screen">
            {/* Contenedor de la imagen de fondo */}
            <img className="absolute inset-0 object-cover w-full h-full" src={LogoFondo} alt="" />
            <img className="absolute inset-0 object-cover w-full h-full" src={LogoFondo} alt="" />
            {/* Contenedor principal */}
            <div className="px-4 mx-auto max-w-7xl sm:py-40 md:px-12 lg:relative absolute inset-x-0 -bottom-80 py-80 h-16 lg:py-24 relative z-10">
                {/* Contenedor interno para centrar y alinear el contenido */}
                <div className="justify-center mx-auto text-left align-bottom transition-all transform rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
                    {/* Grid para organizar los elementos */}
                    <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto lg:grid-cols-2 sm:max-w-900">
                        {/* Columna principal */}
                        <div className="w-full">
                            {/* Espacio vertical entre elementos y ajustes para dispositivos móviles */}
                            <div className="space-y-2 py-4 sm:py-0">
                                {/* Espacio adicional en la parte superior para dispositivos móviles */}
                                <div className="sm:pt-8"> 
                                    {/* Campo de entrada para el email */}
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input type="text" name="email" id="email" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your email" />
                                </div>
                                {/* Campo de entrada para la contraseña */}
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input type="password" name="password" id="password" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your password" />
                                </div>
                                {/* Botón de registro */}
                                <div className="text-center">
                                    <button type="button" className="inline-block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Login;
