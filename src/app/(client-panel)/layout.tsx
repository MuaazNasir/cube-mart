"use client"

import Navbar from '../../../components/layout/Navbar'
import Footer from '../../../components/layout/Footer';
import { Store } from '@/redux/store';
import { Provider } from 'react-redux';


export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <head>
      <title>Cube Mart</title>
      </head>
      <body>
        <Provider store={Store}>
          <Navbar />
          <div className="w-[95%] m-auto">
            {children}
          </div>
          <Footer></Footer>
        </Provider>
      </body>
    </html>
  )
}
