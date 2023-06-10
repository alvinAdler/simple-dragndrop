import React, { useState} from 'react'
import { FaPlus } from 'react-icons/fa'

import BaseModal from '../Modal'
import Button from '../Button'
import AddModal from './modal'

const AddValk = () => {

  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <>
      <Button type='primary' className='mx-auto mt-2 flex items-center gap-2' onClick={() => setIsModalVisible(true)}><FaPlus/>Add new valk!</Button>
      <BaseModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <AddModal action='add'/>
      </BaseModal>
    </>
  )
}

export default AddValk