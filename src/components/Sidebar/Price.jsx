import React from 'react'
import Input from '../Input'

const Price = ({handleChange}) => {
  return (
    <div className='flex flex-col item-center py-5  border-b-2'>
    <h2 className="sidebar-title">Price</h2>

    <div className='flex flex-col items-start'>
    <label  className='flex gap-2 group items-center'>
        <input  onChange={handleChange} type="radio" name='test2' value='' className='w-[15px] h-[15px] group:hover:bg-[#ccc] checked:bg-[#2196f3]' />
        <span className='text-xl'>All</span>
    </label>

      <Input handleChange={handleChange} value={50} title='$0-$50' name='test2'/>
      <Input handleChange={handleChange} value={100} title='$50-$100' name='test2'/>
      <Input handleChange={handleChange} value={150} title='$100-$150' name='test2'/>
      <Input handleChange={handleChange} value={200} title='Over $150' name='test2'/>

    </div>
  </div>
  )
}

export default Price