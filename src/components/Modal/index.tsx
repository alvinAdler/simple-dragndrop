import React from 'react'

import "./styles.css"

import BlackBanner from '../BlackBanner';

interface BaseModalProps{
  isVisible: boolean;
  children?: React.ReactNode;
  onClose: () => void;
}

const BaseModal: React.FC<BaseModalProps> = ({ isVisible, children, onClose }) => {
  return (
    <>
      <div className={`w-screen h-screen z-[999] fixed inset-0 flex justify-center items-center isolate transition-all ${isVisible ? "visible opacity-100" : "invisible opacity-0"}`}>
        {children}
        <BlackBanner onClick={onClose}/>
      </div>
    </>
  )
}

export default BaseModal