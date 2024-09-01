import React from 'react'

const Card = ({img, title, star, reviews, prevPrice, newPrice}) => {
  return (
    <div className="card p-5 border-2 border-[#ededed] hover:border-black  rounded-md">
          <img className='w-[180px] h-[125px] pb-2' src={img} alt="" />
          <div>
            <h3 className='text-xl max-w-[125px]'>{title}</h3>
            <div className='flex'>
              {star}  {star} {star} {star}
              <span>{reviews}</span>
            </div>
            <div className='mb-2 flex gap-1'>
              <span className='line-through'>{prevPrice}</span>
              <span className='text-md'>${newPrice}</span>
            </div>
            <button className='px-3 py-1 border-2 rounded-full text-md text-center'>Add to cart</button>
          </div>
      </div>
  )
}

export default Card