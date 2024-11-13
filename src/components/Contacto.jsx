import React from 'react'
import jaranaContact from '../assets/img/Jarana_8.png'

const Contacto = () => {
  return (
    <section className='w-full h-auto'>
        <div className='w-[85%] md:w-[70%] xl:w-[57%] m-auto py-[55px]'>
            <div className='flex items-center text-white text-[25px] justify-center xl:text-[50px]'>
                <img className='w-[130px] smd:w-[200px] mx-1 mb-3' src={jaranaContact} alt="Hagamos Ratch" />!
            </div>
            <h3 className='text-white text-center leading-5 mb-5 mt-3 sm:mt-5 text-[18px] '>Enciende la <span className='font-bold'>creatividad</span>  que impulsa tu <span className='font-bold'>negocio</span></h3>
            <p className='text-humo text-center mb-3 text-[12px] xl:text-[18px] w-[80%] m-auto'>Cuéntanos un poco sobre tu proyecto a continuación para realizarte un presupuesto personalizado</p>
            <p className='text-humo text-center mb-10 text-[12px] xl:text-[18px] w-[70%] m-auto'>Si deseas una reunión para conversar más,podemos programar una hora.</p>
            <div className='w-full'>
                <form className="w-full" action="/datosform" method="post">
                    <div className='flex w-full flex-col smd:flex-row xl:my-[5px]'>
                        <input className='bg-plomo w-full placeholder-textHumo  h-[35px] rounded-3xl border-2 border-black pl-[20px] text-[10px] xl:h-[45px] xl:text-[14px]' name="nombre" id="nombre" placeholder='Tu nombre y apellido' type="text" autocomplete="off"/>
                        <input className='w-full h-[35px] placeholder-textHumo rounded-3xl border-2 border-black pl-[20px] bg-plomo text-[10px] xl:h-[45px] xl:text-[14px]' name="empresa" id="empresa" placeholder='Tu empresa' type="text" autocomplete="off"/>
                    </div>
                    <div className='flex w-full flex-col xl:my-[5px]'>
                        <input className='w-full h-[35px] placeholder-textHumo  rounded-3xl border-2 border-black pl-[20px] bg-plomo text-[10px] xl:h-[45px] xl:text-[14px]' name="email" id="email" placeholder='Tu correo electronico' type="email" autocomplete="off"/>
                    </div>
                    <div className='flex w-full flex-col smd:flex-row xl:my-[5px]'>
                        <input className='w-full h-[35px] placeholder-textHumo  rounded-3xl border-2 border-black pl-[20px] bg-plomo text-[10px]  xl:h-[45px] xl:text-[14px]' name="celular" id="celular" placeholder='Tu celular' type="text" autocomplete="off"/>
                        <input className='w-full h-[35px] placeholder-textHumo  rounded-3xl border-2 border-black pl-[20px] bg-plomo text-[10px] xl:h-[45px] xl:text-[14px]' name="servicio" id="servicio" placeholder='Tu servicio' type="text" autocomplete="off"/>
                    </div>
                    <div className='flex w-full flex-col xl:my-[5px]'>
                        <textarea className='bg-plomo placeholder-textHumo resize-none text-[10px] pl-[20px] pt-2 h-[100px] border-2 border-black rounded-2xl xl:text-[14px]' id="comentarios" placeholder='Comentanos un poco más de tu proyecto' name="comentarios" ></textarea>
                    </div>
                    <div>
                        <button className='btn m-auto text-white font-bold w-24 p-1 text-[14px] mt-5 flex justify-center md:text-[18px] md:w-40' type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>

    </section>
  )
}

export default Contacto