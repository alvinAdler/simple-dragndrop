import React from 'react'
import LoadingScreen from '../LoadingScreen'

interface BaseTemplateProps{
  children: React.ReactNode;
  isLoading?: boolean;
}

const BaseTemplate: React.FC<BaseTemplateProps> = ({ isLoading, children }) => {
  return (
    <>
      {children}
      <LoadingScreen isLoading={isLoading}/>
    </>
  )
}

export default BaseTemplate