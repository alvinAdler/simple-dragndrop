import React from 'react'

interface SelectProps extends React.HTMLProps<HTMLSelectElement>{

}

const Select: React.FC<SelectProps> = () => {
  return (
    <div>Select</div>
  )
}

export default Select