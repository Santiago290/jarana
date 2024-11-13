import React from 'react'
import menu from "../assets/img/menu.svg"
import jarana from "../assets/img/jarana_.png"
import Arrow from './Arrow'

function Nav() {

  return (
    <>
        <nav className='w-full h-48 sm:h-56 flex justify-between items-center'>
            <img className='w-32 sm:w-60 invert' src={jarana} alt="ratch" />
            <div className='flex gap-3 items-center'>
                <div className='btn pr-3 pl-5 py-2 lg:flex hidden '>
                    <button className='text-blanco text-2xl' href="#">Contáctanos</button>
                    <Arrow color='red' background="bg-blanco" borderColor='none' borderWidth='none'/>
                </div>
                <button className='rounded-full w-8 h-8 sm:w-10 sm:h-10 border-2 border-blanco flex items-center justify-center'>
                      <img className='w-4 sm:w-5' src={menu} alt="menuNavegacion" />
                </button>
            </div>

        </nav>
    </>
  )
}

export default Nav