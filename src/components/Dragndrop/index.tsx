import React, { useContext, useState, useCallback } from 'react'

import { FaEdit, FaTrash } from 'react-icons/fa'

import { AppContext } from '../../App'
import { Valkyrie } from '../../services/valkApi/types'
import { useDeleteValkRowMutation } from '../../services/valkApi'

import Card from '../Card'
import Button from '../Button'
import BaseTemplate from '../BaseTemplate'

interface DragndropProps{
  list: Valkyrie[];
  onMinimizedCardClick: (valk: Valkyrie) => void;
  rowId: string;
}

const Dragndrop: React.FC<DragndropProps> = ({ list, onMinimizedCardClick, rowId }) => {

  const [ deleteVak, {isLoading, isError} ] = useDeleteValkRowMutation()
  const { currentBreakpoint } = useContext(AppContext)
  const [isRowEditable, setIsRowEditable] = useState(false)

  const handleCardEdit = useCallback(() => {
    setIsRowEditable((prevState) => !prevState)
  }, [])

  const handleCardDelete = useCallback(async () => {
    await deleteVak(rowId)
    if(isError){
      console.error(`Error deleting row with id: ${rowId}`)
    }
  }, [isError, rowId, deleteVak])

  return (
    <BaseTemplate isLoading={isLoading}>
      <div className='items-center justify-end flex flex-wrap gap-2 mb-2'>
        <Button buttonType='primary' onClick={handleCardEdit}>
          <FaEdit/>
        </Button>
        <Button buttonType="danger" onClick={handleCardDelete}>
          <FaTrash/>
        </Button>
      </div>
      <div className='flex justify-around flex-wrap gap-4 gap-y-6 p-8 border-2 border-solid border-slate-300/40 rounded-md'>
        {list.map((cardItem, index) => (
          <Card
            key={index}
            valk={cardItem}
            minimizedSettings={{
              isMinimized: currentBreakpoint === "sm",
              onMinimizedClick: onMinimizedCardClick
            }}
            edit={{
              isEditable: isRowEditable,
              onEdit: handleCardEdit,
              onDelete: handleCardDelete
            }}
          />
        ))}
      </div>
    </BaseTemplate>
  )
}

export default Dragndrop