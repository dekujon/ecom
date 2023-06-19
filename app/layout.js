import { ShopContextProvider } from './context/shop-context'
import './globals.css'
import Header from './header'

export const metadata = {
  title: 'Ecommerce by Jon',
  description: 'Ecommerce site built using nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ShopContextProvider>
        <Header />
        {children}
        </ShopContextProvider>
        </body>
    </html>
  )
}
