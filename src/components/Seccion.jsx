import React, { useState } from 'react'
import { secciones } from '../data'
import Arrow from './Arrow'

export default function Seccion(){
    const[acordeon,setAcordeon] = useState(null);
    const[selected, setSelected] = useState(0);

    const toggle = (index) => {
        setAcordeon(index);
    }

    const select = (inx) => {
        setSelected(inx);
    }

    return (
        <div className="bg-plomo text-white mx-auto py-[55px] lg:py-[70px] 2xl:py-[90px]">
            <h2 className="title"> <span className="font-light">LO QUE </span>HACEMOS</h2>
            <div className="flex items-center justify-between flex-col ">
                    {secciones.map((e, index) => (
                        <div
                            key={index}
                            className={`w-full ${acordeon === index ? 'bg-rojo h-auto' : 'bg-transparent'}`}
                            onClick={() => toggle(index)}>
                            <div className={`flex flex-col border-b-[1px] border-white py-[20px] w-[85%] m-auto 
                                        md:w-[70%] 
                                        lg:flex-row lg:justify-between lg:items-center 
                                        xl:w-[57%] xl:py-[30px] 
                                        ${index === secciones.length - 1 ? 'border-none' : ''}`}>
                            <div className="flex gap-2 flex-col justify-start lg:w-[300px] lgx:w-[350px]">
                                <div className="flex items-center gap-3 2xl:gap-7">
                                    <Arrow
                                        width="w-11 2xl:w-[72px]"
                                        height="h-11 2xl:h-[72px]"
                                        imgSize="w-5 2xl:w-7"
                                        background={acordeon === index ? 'bg-white' : 'bg-transparent'}
                                        borderColor={acordeon === index ? 'border-red' : 'border-white'}
                                        borderWidth="border 2xl:border-[2px]"
                                        color={acordeon === index ? 'red' : 'white'}
                                    />
                                    <h2
                                        className={`smd:w-[150x] smd:text-[18px] w-[120px] leading-5 xl:text-[25px] xl:w-[170px] xl:leading-7 2xl:w-[200px] 2xl:text-[30px] ${
                                        acordeon === index ? 'font-bold' : 'font-light'}`}>
                                        {e.title}
                                    </h2>
                                </div>
                                <p className={`ml-[56px] font-light text-[11px] exm:text-[16px] xl:text-[12px] 2xl:ml-[100px] 2xl:text-[15px] ${ acordeon === index ? 'block' : 'hidden'}`}>
                                    {e.descripcion}
                                </p>
                            </div>
                            <div className={`transition-all duration-500 ease-in-out xl:mr-0 3xl:mr-10 ${acordeon === index ? 'max-h-[280px]' : 'max-h-0 hidden'}`}>
                                <div className="flex mt-5 items-center justify-evenly lg:justify-end lg:mt-0 lg:gap-5">
                                    <div className="xl:relative xl:w-[250px]">
                                        {e.subtitles[selected] && (
                                        <img
                                            className="w-[115px] exm:w-[200px] lgx:object-cover xl:absolute xl:top-[-130px] xl:w-auto xl:h-auto"
                                            src={e.subtitles[selected].image}
                                            alt="Selected"
                                        />
                                        )}
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        {e.subtitles.map((a, inx) => (
                                        <div className="flex items-center gap-2 mb-2" key={inx}>
                                            <h3
                                            className={`smd:text-[16px] exm:text-[13px] lg:text-[11px] 2xl:text-[12px] font-light text-[10px] cursor-pointer py-[1px] px-[8px] ${
                                                selected === inx ? 'bg-black rounded-[30px]' : 'bg-transparent'
                                            }`}
                                            onClick={() => select(inx)}
                                            >
                                            {a.subtitle}
                                            </h3>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        ))}
            </div>
        </div>
    )
}

