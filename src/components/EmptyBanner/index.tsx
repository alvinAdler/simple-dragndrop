import React from 'react'
import ImageError from '../../assets/imageErrorLoad.png'

interface EmptyBannerProps{
  title?: string;
  desc?: string;
}

const EmptyBanner: React.FC<EmptyBannerProps> = ({ title, desc }) => {
  return (
    <div className='flex flex-col justify-center items-center shadow-lg p-4 rounded-md gap-4'>
      <img src={ImageError} alt="Error" className='w-[10rem] md:w-[15rem]'/>
      <h2 className='font-bold text-xl'>{title ?? "Data is not available"}</h2>
      <p>{desc ?? "Please try again later"}</p>
    </div>
  )
}

export default EmptyBanner