import React from 'react'

const Cards = ({item}) => {
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between ">
      <div className="badge badge-outline p-4  ">${item.price}</div>
      <div className="badge badge-outline text-sm p-4  hover:bg-pink-700 cursor-pointer duration- hover:text-white duration-200 mx-2 my-1">Buy now</div>
    </div>
  </div>
</div>
    </div>

    </>
  )
}

export default Cards