import React, { useRef, useEffect } from 'react'

import "./index.css"
import ImageErrorLoad from '../../assets/imageErrorLoad.png'

import Button from '../Button'
import { Valkyrie } from '../../services/valkApi/types'

interface CardProps{
  valk: Valkyrie;
  minimizedSettings?: {
    isMinimized: boolean;
    onMinimizedClick: (valk: Valkyrie) => void;
  },
  edit?: {
    isEditable: boolean;
    onEdit: () => void;
    onDelete: () => void;
  },
}

const Card: React.FC<CardProps> = ({ valk, minimizedSettings, edit }) => {

  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    
    const onClick = () => {
      if(minimizedSettings?.isMinimized){
        minimizedSettings?.onMinimizedClick(valk)        
      }
    }

    const cardRefHolder = cardRef.current
    
    if(cardRefHolder){
      cardRefHolder.addEventListener("click", onClick)
    }

    return () => {
      if(cardRefHolder){
        cardRefHolder.removeEventListener("click", onClick)
      }
    }

  // eslint-disable-next-line
  }, [minimizedSettings?.isMinimized])

  const currentStyle = (() => {
    switch(valk.type){
      case "MEC": return({
        shadow: "shadow-mec",
        text: "text-mec"
      })
      case "BIO": return({
        shadow: "shadow-bio",
        text: "text-bio"
      })
      case "PSY": return({
        shadow: "shadow-psy",
        text: "text-psy"
      })
      case "IMG": return({
        shadow: "shadow-img",
        text: "text-img"
      })
      case "QUA": return({
        shadow: "shadow-qua",
        text: "text-qua"
      })
    }
  })()

  return (
    <div className={`flex flex-col gap-2 bg-white w-[18rem] p-4 text-center border border-solid border-slate-300 rounded-lg shadow-md ${currentStyle.shadow} ${minimizedSettings?.isMinimized ? "cursor-pointer" : ""}`}
      ref={cardRef}
    >
      <object data={valk.imageUrl} type="image/png" className="w-[8rem] md:w-[10rem] mx-auto mb-2">
        <img src={ImageErrorLoad} alt={valk.title} className="w-[8rem] md:w-[10rem]"/>
      </object>
      <h2 className={`card-title font-extrabold text-3xl mt-2 ${currentStyle.text}`}>{valk.title}</h2>
      {!minimizedSettings?.isMinimized && 
        <>
          <hr className='my-2'/>
          <p className='text-justify h-[10rem] overflow-auto p-2'>{valk.desc}</p>
        </>
      }
      {edit?.isEditable &&
        <div className='flex gap-2 justify-around p-2 mt-4 items-center flex-wrap'>
          <Button buttonType='primary' className='flex-1' onClick={() => edit?.onEdit()}>Edit</Button>
          <Button buttonType='danger' className='flex-1' onClick={() => edit?.onDelete()}>Delete</Button>
        </div>
      }
    </div>
  )
}

export default Card