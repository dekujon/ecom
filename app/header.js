"use client"

import Link from 'next/link';
import React, { useContext } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { ShopContext } from './context/shop-context';

function Header() {
  const { cartItems } = useContext(ShopContext);

  const values = Object.values(cartItems);

  const sum = values.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  return (
    <nav className='bg-black h-14 flex items-center justify-center sticky top-0'>
        <ul className='text-white flex gap-5 pr-3 indicator text-xl items-center'>
            <li><Link href="/">Shop</Link></li>
            {sum > 0 && <span className="indicator-item badge badge-secondary">{sum}</span> }
            <li className='text-2xl'><Link href="/cart">
                <IoCartOutline />
            </Link></li>
        </ul>
    </nav>
  )
}

export default Header