import React from 'react'
import Input from '../Input'

const Colors = ({handleChange}) => {
  return (
    <div className='flex flex-col item-center py-5  border-b-2'>
    <h2 className="sidebar-title">Colors</h2>

    <div className='flex flex-col items-start'>
      <label  className='flex gap-2 group items-center'>
        <input  onChange={handleChange} type="radio" name='test2' value='' className='w-[15px] h-[15px] group:hover:bg-[#ccc] checked:bg-[#2196f3]' />
        <span className='text-xl'>All</span>
      </label>

      <Input handleChange={handleChange} value='black' title='Black' name='test2' color='#000'/>
      <Input handleChange={handleChange} value='blue' title='Blue' name='test2' color='#0000FF'/>
      <Input handleChange={handleChange} value='red' title='Red' name='test2' color='#FF0000'/>
      <Input handleChange={handleChange} value='green' title='Green' name='test2' color='#008000'/>
      <Input handleChange={handleChange} value='white' title='White' name='test2' color='#fff'/>


    </div>
  </div>
  )
}

export default Colors