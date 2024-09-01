import React from 'react'

const Input = ({handleChange, value, title, name, color}) => {
  return (
    <label  className='flex gap-2 group items-center'>
          <input onChange={handleChange} type="radio" value={value} name={name} className={`w-[15px] h-[15px]  bg-[${color}] checked:bg-[#2196f3]`}/>
          <span className='text-xl'>{title}</span>
    </label>
  )
}

export default Input