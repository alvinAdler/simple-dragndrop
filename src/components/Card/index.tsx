import React, { useMemo } from 'react'

import "./index.css"

import VALK_AVATARS from '../../resources/valkyries-avatars.json'
import Button from '../Button'

interface CardProps{
  onEdit: () => void;
  onDelete: () => void;
  title: string;
  description: string;
  type: "MEC" | "PSY" | "BIO" | "IMG" | "QUA";
}

const Card: React.FC<CardProps> = ({ onEdit, onDelete, title, description, type }) => {

  const randomValk = useMemo(() => {
    // const allKeys = Object.keys(VALK_AVATARS)
    // const randomKey = allKeys[Math.round(Math.random() * allKeys.length)]
    // return({
    //   name: randomKey,
    //   details: VALK_AVATARS[randomKey as keyof typeof VALK_AVATARS]
    // })
    switch(type){
      case "MEC":
        return({
          name: "HoR",
          details: VALK_AVATARS.HoR
        })
      case "BIO":
        return({
          name: "HoS",
          details: VALK_AVATARS.HoS
        })
      case "PSY":
        return({
          name: "HoT",
          details: VALK_AVATARS.HoT
        })
      case "IMG":
        return({
          name: "HoFi",
          details: VALK_AVATARS.HoFi
        })
      case "QUA":
        return({
          name: "SN",
          details: VALK_AVATARS.SN
        })
    }
  }, [type])

  const currentStyle = (() => {
    switch(type){
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
    <div className={`flex flex-col gap-2 max-w-[18rem] p-4 text-center border border-solid border-slate-300 rounded-lg shadow-md ${currentStyle.shadow}`}>
      <img src={randomValk.details.url} alt={title} className="w-[10rem] mx-auto mb-2" />
      <h2 className={`font-extrabold text-3xl ${currentStyle.text}`}>{title}</h2>
      <hr className='my-2'/>
      <p className='text-justify h-[10rem] overflow-auto p-2'>{description}</p>
      <div className='flex gap-2 justify-around p-2 mt-4 items-center flex-wrap'>
        <Button type='primary' className='flex-1'>Edit</Button>
        <Button type='danger' className='flex-1'>Delete</Button>
      </div>
    </div>
  )
}

export default Card