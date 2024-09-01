import React from 'react'


import Category from './Sidebar/Category'
import Price from './Sidebar/Price'
import Colors from './Sidebar/Colors'


const Sidebar = ({handleChange}) => {

  return (
    <section className='flex flex-col items-around pl-10 h-[100%]'>
      <Category handleChange={handleChange}/>
      <Price handleChange={handleChange}/>
      <Colors handleChange={handleChange}/>

    </section>
  )
}

export default Sidebar