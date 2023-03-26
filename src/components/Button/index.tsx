import React from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement>{
  children: React.ReactNode,
  type: "primary" | "danger" | "warning" | "success"
}

const Button: React.FC<ButtonProps> = ({ children, type, className, ...rest }) => {

  const conditionalStyles = (() => {
    switch(type){
      case 'primary':
        return "bg-cyan-500 focus:outline-cyan-500 focus:bg-cyan-400"
      case 'success':
        return "bg-green-500 focus:outline-green-500 focus:bg-green-400"
      case "danger":
        return "bg-red-500 focus:outline-red-500 focus:bg-red-400"
      case "warning":
        return "bg-yellow-500 focus:outline-yellow-500 focus:bg-yellow-400"
      default:
        return ""
    }
  })()

  return (
    <button className={`${className ?? ""} p-2 rounded-[8px] text-slate-50 ${conditionalStyles}`} {...rest}>
      {children}
    </button>
  )
}

export default Button