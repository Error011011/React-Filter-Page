import React from 'react'
import Input from '../Input'

const Category = ({handleChange}) => {

  return (
    <div className='flex flex-col item-center py-5  border-b-2'>
      <h2 className="sidebar-title">Category</h2>

      <div className='flex flex-col items-start'>
        <label  className='flex gap-2 group items-center'>
          <input  onChange={handleChange} type="radio" name='test' value="" className='w-[15px] h-[15px] group:hover:bg-[#ccc] checked:bg-[#2196f3]' />
          <span className='text-xl'>All</span>
        </label>

        <Input handleChange={handleChange} value='sneakers' title='Sneakers' name='test'/>
        <Input handleChange={handleChange} value='flats' title='Flats' name='test'/>
        <Input handleChange={handleChange} value='sandals' title='Sandals' name='test'/>

      </div>
    </div>
  )
}

export default Category