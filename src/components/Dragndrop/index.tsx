import React, { useContext, useState, useCallback } from 'react'

import { FaEdit, FaTrash } from 'react-icons/fa'

import { AppContext } from '../../App'
import { Valkyrie } from '../../services/valkApi/types'

import Card from '../Card'
import Button from '../Button'

interface DragndropProps{
  list: Valkyrie[];
  onMinimizedCardClick: (valk: Valkyrie) => void;
}

const Dragndrop: React.FC<DragndropProps> = ({ list, onMinimizedCardClick}) => {

  const { currentBreakpoint } = useContext(AppContext)
  const [isRowEditable, setIsRowEditable] = useState(false)

  const handleCardEdit = useCallback(() => {

  }, [])

  const handleCardDelete = useCallback(() => {

  }, [])

  return (
    <div>
      <div className='items-center justify-end flex flex-wrap gap-2 mb-2'>
        <Button type='primary' onClick={() => setIsRowEditable((prevState) => !prevState)}>
          <FaEdit/>
        </Button>
        <Button type="danger">
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
    </div>
  )
}

export default Dragndrop