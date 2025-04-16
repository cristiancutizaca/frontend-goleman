"use client";
import React, { useState, useEffect } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

import Principalhome from "./principal";
import Admipros from "./guiaAdmi";
import Precios from "./precios";
import Formulario from "./AdmissionForm";
import Documentos from "./documentos.jsx";

const Graduate = () => {
  return (
    <section id="/diplomados">
      <div className=" p-5 flex flex-col">
        <div id='civil' className="flex text-primaryblue text-center text-3xl  lg:text-5xl xl:text-5xl lg:w-3/4 mb-4 font-bold font-poppins lg:ml-72">
        </div>
          <div id='Principal' className='mb-20 lg:mb-10'>
            <Principalhome />
          </div>
          <div id='ambiental' className="flex text-primaryblue text-center text-3xl  lg:text-5xl xl:text-5xl lg:w-3/4 mb-4 font-bold font-poppins lg:ml-72">
        </div>
          <div className='mb-20 lg:mb-10'>
            <Admipros />
          </div>
          <div id='alimentarias' className="flex text-primaryblue text-center text-3xl  lg:text-5xl xl:text-5xl lg:w-3/4 mb-4 font-bold font-poppins lg:ml-72">
        </div>
          <div className='mb-20 lg:mb-10'>
            <Precios />
          </div>
          <div id='agronoma' className="flex text-primaryblue text-center text-3xl  lg:text-5xl xl:text-5xl lg:w-3/4 mb-4 font-bold font-poppins lg:ml-72">
        </div>
          <div className='mb-20 lg:mb-10'>
            <Documentos />
          </div>
        <div id='derecho' className="ml-15flex text-primaryblue text-center text-3xl  lg:text-5xl xl:text-5xl lg:w-3/4 mb-4 font-bold font-poppins lg:ml-72">
        </div>
         
        <div className='mb-20 lg:mb-10'>
            <Formulario />
          </div>
          
      </div>
{/*       <Whatsapp />
 */}    </section>
  )
}

export default Graduate;