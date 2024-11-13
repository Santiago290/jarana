import React from 'react'
import ucal from '../assets/img/ucal.jpg'

const Parnerts = () => {
  return (
    <section className='bg-white w-full h-auto relative'>
        <div className='w-[85%] md:w-[70%] xl:w-[57%] m-auto py-[55px]'>
            <h2 className='title'> <span className='font-medium'>NUESTROS </span>PARTNERS</h2>
            {/* <div className='w-full overflow-hidden relative'>
                <div className='absolute w-full h-full bg-custom-gradient z-10'>
                </div>
                <div className='inline-flex gap-2 animate-slider'>
                    {partners.map((e,index)=>(
                        <div className='w-[140px]' key={index}>
                            <img className='w-full' src={e.imagen} alt={e.nombre} />
                        </div>
                    ))}
                </div>
            </div> */}
            <div className='md:grid grid-cols-[1fr,1fr] gap-10 items-center mb-0 md:mb-10'>
                <div className='text-center md:text-start'>
                    <h3 className='font-bold text-[30px] '>Estudio Creativo</h3>
                    <p className=' text-[12px] smd:text-[20px] mt-2 mb-7'>Creemos firmemente en ofrecer soluciones
                        creativas y de alto nivel que destaquen en el
                        mercado, ayudando a construir una marca
                        sólida y memorable.
                    </p>
                </div>
                <div className='w-full'>
                    <img className='w-full rounded-lg smd:text[250px] smd:h-[250px]' src={ucal} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Parnerts