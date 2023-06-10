import React from 'react'

interface InputProps extends React.HTMLProps<HTMLInputElement>{
  
}

const Input: React.FC<InputProps> = ({ className, placeholder, ...rest }) => {
  return (
    <input 
      className={`${className ?? ""} p-2 border border-solid transition-all border-slate-400 outline outline-1 outline-transparent active:outline-cyan-500 focus:outline-cyan-500 rounded-md`} {...rest}
      placeholder={placeholder ?? "Input your data"} 
    />
  )
}

export default Input