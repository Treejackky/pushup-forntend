import React from 'react'
import Navbar from './Navbar'
import '../../public/theme/layout.css'
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  )
}
export { Layout }