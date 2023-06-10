import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

import { capitalizeString } from '../../utilities/functions'
import { useAddValkMutation } from '../../services/valkApi'

import Input from '../Input'
import FormItem from '../FormItem'
import Button from '../Button'
import { ValkType, VALKTYPES } from '../../services/valkApi/types'
import Select from '../Select'
import BaseTemplate from '../BaseTemplate'

interface ModalData{
  imageUrl: string,
  title: string,
  desc: string,
  type: ValkType
}

interface AddModalProps{
  data?: ModalData,
  action: "add" | "edit"
  onClose: () => void;
}

const AddModal: React.FC<AddModalProps> = ({ data, action, onClose }) => {

  const [addValk, { isLoading, isError }] = useAddValkMutation()
  const [currentData, setCurrentData] = useState<ModalData>(data ?? {
    imageUrl: "",
    title: "",
    desc: "",
    type: "MEC"
  })

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    await addValk({
      ...currentData,
      type: currentData.type
    })
    if(!isError){
      onClose()
      setCurrentData({
        imageUrl: "",
        title: "",
        desc: "",
        type: "MEC"
      })
    }
  }

  return (
    <BaseTemplate isLoading={isLoading}>
      <form className='bg-white flex flex-col gap-2 shadow-md rounded-md w-[40rem] max-w-[80%] p-4' onSubmit={handleSubmit}>
        <h2 className='mb-4 font-bold text-2xl'>{capitalizeString(action)} Valkyrie Data</h2>
        <FormItem id="imageUrlInput" label='Image URL'>
          <Input placeholder="Input image URL here" id='imageUrlInput' value={currentData.imageUrl} onChange={(ev) => setCurrentData((prevState) => ({...prevState, imageUrl: ev.target.value}))}/>
        </FormItem>
        <FormItem id="titleInput" label='Title'>
          <Input placeholder="Input title here" id='titleUrlInput' value={currentData.title} onChange={(ev) => setCurrentData((prevState) => ({...prevState, title: ev.target.value}))}/>
        </FormItem>
        <FormItem id="descInput" label='Description'>
          <Input placeholder="Input descriptionhere" id='descInput' value={currentData.desc} onChange={(ev) => setCurrentData((prevState) => ({...prevState, desc: ev.target.value}))}/>
        </FormItem>
        <FormItem id='typeInput' label='Type'>
          <Select
            value={currentData.type}
            currentDisplay={currentData.type}
            onChange={(value) => setCurrentData((prevState) => ({...prevState, type: value as ValkType}))}
            options={VALKTYPES}
          />
        </FormItem>
        <Button type="submit" buttonType='primary' className='mt-8'><FaPlus/>Submit</Button>
      </form>
    </BaseTemplate>
  )
}

export default AddModal