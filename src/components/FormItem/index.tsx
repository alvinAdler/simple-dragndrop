import React from 'react'

interface FormItemProps{
  children: React.ReactNode,
  id: string,
  label: string,
}

const FormItem: React.FC<FormItemProps> = ({ id, children, label }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={id} className='font-medium w-fit'>{label}</label>
      {children}
    </div>
  )
}

export default FormItem