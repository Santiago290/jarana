import React from 'react'
import fotoInicial from "../assets/img/fotoInicial.jpg"
import VideoWeb from "../assets/VideoWeb.mp4"
import Nav from '../components/Nav'
import Arrow from '../components/Arrow'
import Slider from '../components/Slider'
import Seccion from '../components/Seccion'
import Proyectos from '../components/Proyectos'
import Partners from '../components/Parnerts'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <div className='m-auto font-poppins xl:w-[57%] md:w-[70%] sm:w-[85%] w-[85%]'>
          <section className='flex flex-wrap justify-between items-center w-full mt-0 md:flex lg:flex-nowrap md:gap-10 xl:gap-16 2xl:gap-32 mb-0 lg:mb-[60px] xl:mb-[140px] md:mb-[90px]'>
            <div className='lg-[400px] lg:w-4/6 2xl:w-[54%] '>
                  <h1 className='text-blanco text-[30px] leading-10 sm:text-[48px] sm:leading-none lg:text-[44px] xl:text-[40px] 2xl:text-[50px]'>El match perfecto <br/> entre <span className='font-bold'>creatividad</span> <br/> y <span className='font-bold'>ejecución</span></h1>
                  <p className='text-blanco mt-10 text-[14px] smd:text-[18px] xl:mt-16 font-light'>Como Estudio de <span className='font-bold'>Diseño</span> y <span className='font-bold'>Branding</span> estamos comprometidos en convertirnos en tu aliado estratégico, estableciendo la conexión ideal entre tu marca y su audiencia, impulsando su crecimiento con soluciones creativas generando resultados reales.</p>
                  <button className='btn flex pt-[5px] pb-[5px] pl-[5px] pr-[13px] my-0 mt-10 lg:my-10 lg:hidden'>
                      <Arrow width="w-8" height="h-8" img="w-4" background="bg-blanco" borderColor='none' borderWidth='none' />
                      <span className='text-blanco text-xl' href="#">Contáctanos</span>
                  </button>
            </div>
            <div className='lg:w-[340px] lg:h-[450px] xl:h-[550px] w-full h-auto overflow-hidden '>
              <img className='m-auto h-[400px] smd:h-[500px] lg:h-auto' src={fotoInicial} alt="" />
            </div>
          </section>
      </div>
      <div className='w-full h-[200px] xl:h-[400px] lg:h-[300px] md:h-[250px] bg-red-500'>
        <video className='h-[100%] object-cover' src={VideoWeb} autoPlay loop muted></video>
      </div>
      <div className='w-full md:h-[250px] xl:h-[350px] h-auto bg-white flex justify-center items-center '>
          <p className='text-center py-0 text-[14px] md:text-[18px] lg:text-[18px] xl:text-[23px] m-[35px] md:w-[65%] w-[85%] lg:w-[56%] xl:font-medium xl:'>Creemos apasionadamente en el poder de la creatividad y con ello, impulsar marcas y negocios hacia su crecimiento convirtiéndonos en tus aliados estratégicos abriendo nuevas oportunidades a través de soluciones creativas que generan resultados tangibles.</p>
      </div>
      <Seccion></Seccion>
      <Proyectos></Proyectos>
      <Partners></Partners>
      <Contacto></Contacto>
      <Footer></Footer>
    </>
  )
}


export default Home