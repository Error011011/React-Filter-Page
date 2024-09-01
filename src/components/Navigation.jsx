import React from 'react'

import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'

const Navigation = ({handleInputChange, query}) => {
  return (
    <nav className='py-4 flex justify-around items-center border-b-2 '>
      <input onChange={handleInputChange}   className='py-3 px-5 border-none bg-[#f7f6f6] rounded-full' type="text" placeholder='Enter model'/>

      <div className='flex items-center gap-2 '>

        <a className='flex justify-center items-center' href="#">
          <FiHeart className='w-6 h-6'/>
        </a>

        <a className='flex justify-center items-center' href="#">
          <AiOutlineShoppingCart className='w-6 h-6'/>
        </a>

        <a className='flex justify-center items-center' href="#">
          <AiOutlineUserAdd className='w-6 h-6'/>
        </a>

      </div>
    </nav>
  )
}

export default Navigation