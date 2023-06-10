import React from 'react'
import { FaPlus } from 'react-icons/fa'

import { capitalizeString } from '../../utilities/functions'

import Input from '../Input'
import FormItem from '../FormItem'
import Button from '../Button'

interface AddModalProps{
  data?: {
    imageUrl: string,
    title: string,
    desc: string
  },
  action: "add" | "edit"
}

const AddModal: React.FC<AddModalProps> = ({ data, action }) => {
  return (
    <div className='bg-white flex flex-col gap-2 shadow-md rounded-md w-[40rem] max-w-[80%] p-4'>
      <h2 className='mb-4 font-bold text-2xl'>{capitalizeString(action)} Valkyrie Data</h2>
      <FormItem id="imageUrlInput" label='Image URL'>
        <Input placeholder="Input image URL here" id='imageUrlInput'/>
      </FormItem>
      <FormItem id="titleInput" label='Title'>
        <Input placeholder="Input title here" id='titleUrlInput'/>
      </FormItem>
      <FormItem id="descInput" label='Description'>
        <Input placeholder="Input descriptionhere" id='descInput'/>
      </FormItem>
      <Button type='primary' className='mt-8'>
        <FaPlus/>
        Submit
      </Button>
    </div>
  )
}

export default AddModal