import React from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement>{
  children: React.ReactNode,
  type: "primary" | "danger" | "warning" | "success"
}

const Button: React.FC<ButtonProps> = ({ children, type, className, ...rest }) => {

  const conditionalStyles = (() => {
    switch(type){
      case 'primary':
        return "bg-cyan-500 focus:outline-cyan-500 focus:bg-cyan-400 hover:bg-cyan-400 transition ease-in"
      case 'success':
        return "bg-green-500 focus:outline-green-500 focus:bg-green-400 hover:bg-green-400 transition ease-in"
      case "danger":
        return "bg-red-500 focus:outline-red-500 focus:bg-red-400 hover:bg-red-400 transition ease-in"
      case "warning":
        return "bg-yellow-500 focus:outline-yellow-500 focus:bg-yellow-400 hover:bg-yellow-400 transition ease-in"
      default:
        return ""
    }
  })()

  return (
    <button className={`${className ?? ""} flex items-center justify-center gap-2 p-2 rounded-[8px] text-slate-50 ${conditionalStyles}`} {...rest}>
      {children}
    </button>
  )
}

export default Button