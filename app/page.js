import Product from "./product";
import { PRODUCTS } from "./data";

export default function Home() {
  return (
    <>
    <div className="text-center font-bold text-4xl mt-5">Jon's Store</div>
    <div className="flex max-w-7xl mx-auto flex-wrap">
      {PRODUCTS.map((product) => (<Product data={product} />))}
    </div>
    </>
  )
}
