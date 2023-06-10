import React, { useEffect } from 'react'
import LoadingAiChan from '../../assets/AiChanClaps.gif'

interface LoadingScreenProps{
  isLoading?: boolean
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {

  useEffect(() => {
    if(isLoading){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "auto"
    }
  }, [isLoading])

  if(!isLoading){
    return <></>
  }

  return (
    <div className='fixed w-screen h-screen inset-0 bg-neutral-50 z-[1000] flex flex-col items-center justify-center gap-5'>
      <img src={LoadingAiChan} alt="Loading Ai-Chan" className='w-[15rem] md:w-[20rem]'/>
      <p className='text-xl'>Loading. . .</p>
    </div>
  )
}

export default LoadingScreen