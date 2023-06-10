import React from 'react'
import { Listbox } from '@headlessui/react'
import { FaCheck } from 'react-icons/fa';

interface SelectProps{
  value: string;
  onChange: (newValue: string) => void;
  currentDisplay: string;
  options: string[];
}

const Select: React.FC<SelectProps> = ({ value, onChange, currentDisplay, options }) => {
  return (
    <Listbox value={value} onChange={onChange}>
      <Listbox.Button className="text-start p-2 border border-solid transition-all border-slate-400 outline outline-1 outline-transparent active:outline-cyan-500 focus:outline-cyan-500 rounded-md">{currentDisplay}</Listbox.Button>
      <Listbox.Options>
        {options.map((item, index) => (
          <Listbox.Option key={index} value={item}>
            {({ active, selected }) => (
              <p className={`cursor-pointer mb-2 py-1 px-2 transition-all flex justify-between items-center bg-slate-50 ${(active || selected) && "!bg-cyan-500 text-white"} hover:bg-cyan-500 hover:text-white rounded-md`}>
                {item}
                {selected && <FaCheck/>}
              </p>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default Select