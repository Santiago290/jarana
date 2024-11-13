import React from 'react'
import { Link } from 'react-router-dom'
import jaranaFooter from '../assets/img/Jarana_3.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='font-poppins w-[100%]] bg-white'>

        <div className="grid md:grid-cols-2">
            <div className="flex flex-col items-start bg-white p-8 md:p-16 m-auto ">
                <div className="text-3xl font-bold tracking-tight mb-4">
                    <img className='w-[200px]' src={jaranaFooter} alt="" />
                </div>
                <div className="space-y-1 text-center m-auto">
                    <p className='font-normal'>Lima, Perú</p>
                    <a href="mailto:hola@jarana.com" className="hover:underline">
                    <strong>hola@jarana.com</strong>
                    </a>
                </div>
            </div>
            <div className="flex flex-col bg-[#f5f5f3] p-8 md:p-16">
                <div className="flex justify-around m-auto gap-4">
                    <Link href="#" className="hover:opacity-80">
                        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                            <FaFacebookF className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </div>    
                    </Link>
                    <Link href="#" className="hover:opacity-80">
                        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                        <FaInstagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                        </div>
                    </Link>
                    <Link href="#" className="hover:opacity-80">
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                        <FaLinkedinIn className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                        </div>
                    </Link>
                    <Link href="#" className="hover:opacity-80">
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                        <FaBehance className="h-5 w-5" />
                        <span className="sr-only">Behance</span>
                        </div>
                    </Link>
                    <Link href="#" className="hover:opacity-80">
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                        <FaWhatsapp className="h-5 w-5" />
                        <span className="sr-only">WhatsApp</span>
                        </div>
                    </Link>
                </div>

                <nav className="flex flex-col space-y-2 mt-8 text-center">
                    <Link href="/servicios" className="hover:underline border-b border-black pb-2">
                        Servicios
                    </Link>
                    <Link href="/proyectos" className="hover:underline border-b border-black pb-2">
                        Proyectos
                    </Link>
                    <Link href="/contacto" className="hover:underline border-b border-black pb-2">
                        Contacto
                    </Link>
                    <Link href="/blog" className="hover:underline ">
                        Blog
                    </Link>
                </nav>
            </div>
        </div>

      <div className="bg-black text-white p-4 text-center text-sm">
        <p className='text-[11px] font-light text-textHumo 2xl:text-[17px]'>Todos los derechos reservados © JARANA</p>
      </div>

    </footer>
  )
}

export default Footer