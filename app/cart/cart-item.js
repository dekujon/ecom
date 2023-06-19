import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context';

export const CartItem = (props) => {
    const { id, title, price, image, description } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)

  return (
    <div key={id} className="p-2 flex w-full h-20 max-[640px]:h-24 gap-10 max-[640px]:gap-4 shadow-md mb-2 items-center">
    <div className='w-2/12 flex justify-center'><img className='max-h-20 py-1' src={image} alt={description} /></div>
    <div className='flex flex-col gap-1'>
      <h2 className="font-bold">{title}</h2>
      <p className='text-red-600'>${price}</p>
      
    </div>
    <div className='flex ml-auto'>
          <button onClick={() => removeFromCart(id)} className='btn btn-neutral btn-sm max-[640px]:btn-xs'>-</button>
          <input className='text-center w-16 input input-sm max-[640px]:input-xs input-primary input-bordered' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
          <button onClick={() => addToCart(id)} className='btn btn-neutral btn-sm max-[640px]:btn-xs'>+</button>
      </div>
  </div>
  )
}
