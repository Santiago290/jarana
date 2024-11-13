import React from 'react'
import { useState } from 'react';
import { proyectos } from '../data'

const Proyectos = () => {
 
  const [categoria, setCategoria] = useState(proyectos.filter((e)=> e.secciones === "Branding"));
  
  const clicker = (cat)=>{
    let filtro = []

    if(cat === "Todos"){
      const orden = proyectos.sort(() => Math.random() - 0.5)
      const numOrden = orden.slice(0,4)
      setCategoria(numOrden)
    }else{
      filtro = proyectos.filter(proyects => (
        proyects.secciones === cat
      ))
      setCategoria(filtro)
    }
  }
 
  return (
    <div>
      <div className='w-[85%] md:w-[70%] xl:w-[57%] m-auto py-[55px]'>
        <h2 className='title text-white mx-auto'>PROYECTOS</h2>
        <div className='flex flex-wrap gap-1 justify-center mb-8'>
                <button className='text-white text-[10px] border border-white py-1 px-2 rounded-full font-light' onClick={()=>clicker("Branding")}>Branding</button>
                <button className='text-white text-[10px] border border-white py-1 px-2 rounded-full font-light' onClick={()=>clicker("Desarrollo Web")}>Desarrollo Web</button>
                <button className='text-white text-[10px] border border-white py-1 px-2 rounded-full font-light' onClick={()=>clicker("Social Media")}>Social Media</button>
                <button className='text-white text-[10px] border border-white py-1 px-2 rounded-full font-light' onClick={()=>clicker("Todos")}>Todos</button>
                <button className='text-white text-[10px] border border-white py-1 px-2 rounded-full font-light' onClick={()=>clicker("Ilustración")}>Ilustración</button>
                <button className='text-white text-[10px] border border-white py-1 px-2 rounded-full font-light' onClick={()=>clicker("Packaging")}>Packaging</button>
                <button className='text-white text-[10px] border border-white py-1 px-2 rounded-full font-light' onClick={()=>clicker("Campañas")}>Campañas</button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
            {categoria.map((proyects,indice)=>(
                      <div key={indice} className='overflow-hidden relative'>
                        <img className='rounded-lg md:rounded-b-xl w-[100%] relative z-0 object-cover' src={proyects.imagen} alt="" />
                        {/* <div className=''>
                          <div className='absolute z-10 bottom-0 flex w-full justify-between items-center'>
                            <div className='leading-snug'>
                              <h2 className='font-extrabold size-6 text-start w-full'>{proyects.secciones}</h2>
                              <h3>{proyects.empresa}</h3>
                            </div>
                            <div className='flex items-center gap-4'>
                              <p className='leading-1.1'>VER PROYECTO<br/>COMPLETO</p>
                              <div className='border border-white w-12 h-12 rounded-full flex justify-center items-center text-2xl text-white'>
                                ↗
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
            ))}
        </div>
        <button className='btn m-auto text-white w-28 p-1 text-[14px] mt-12 flex justify-center md:text-[18px] md:w-40'>Conoce más</button>
      </div>
    </div>
    
  )
}

export default Proyectos