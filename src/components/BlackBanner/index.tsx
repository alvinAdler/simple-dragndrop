import React from 'react'

interface BlackBannerProps{
  className?: string;
  onClick?: () => void;
}

const BlackBanner: React.FC<BlackBannerProps> = ({ className, onClick }) => {
  return (
    <div className={className ?? "absolute w-full h-full bg-gray-700/50 z-behind"} onClick={() => onClick && onClick()}></div>
  )
}

export default BlackBanner