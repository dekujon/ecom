"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React, { useContext, useState } from "react";
import { PRODUCTS } from "../data";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "./cart-item";
import Link from "next/link";

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const roundedTotal = totalAmount.toFixed(2)

  const amount = roundedTotal;
  const currency = "USD";
  const style = { layout: "vertical" };

  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const checkOutHandler = () => {
    setIsCheckedOut((isCheckedOut) => !isCheckedOut);
  }

  return (
    <>
      <h1 className="text-center font-bold text-4xl my-5">Your Cart Items</h1>
      <div>
        <div className="flex flex-col max-w-7xl mx-auto max-[1024px]:text-sm max-[640px]:text-xs">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="flex flex-col items-center">
            <p className="font-bold text-xl text-red-600 mt-5"> Subtotal: ${roundedTotal}</p>
              <div className="flex">
                <Link href="/">
                  <button className="btn btn-neutral m-5"> Continue Shopping </button>
                </Link>
                <button onClick={checkOutHandler} className="btn btn-neutral m-5"> Check out </button>
              </div>

{isCheckedOut && 
  <PayPalScriptProvider options={{"client-id": "AaLOBTySXX2UsdOAI_6vysisHPPTu_RjS7dN8SLqLNWYBw8i3Mh8_OBQK4Yde0K4je9X-MLgWOayvAbs"}}>
                <PayPalButtons className="w-96"
                  style={style}
                  disabled={false}
                  forceReRender={[amount, currency, style]}
                  fundingSource={undefined}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: currency,
                            value: amount,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                      // Your code here after capture the order
                      alert(
                        "Transaction completed by " + details.payer.name.given_name
                      );
                    });
                  }}
                />
              </PayPalScriptProvider>
 }
              
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="h-3/6"><img  className="h-full" src="https://i.pinimg.com/originals/c6/0f/ea/c60fea3ac3aab2e82c2f7ea901ef55f6.jpg" alt="empty cart" /></div>
            <div className="font-bold text-2xl">
              <h1> Oops, your cart is empty. </h1>
            </div>
            <div className="mt-5">
              <Link href="/">
                <button className="btn btn-neutral"> Continue Shopping </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
