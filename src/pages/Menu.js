import React from 'react'
import { Link } from 'react-router-dom'


export const TopHeader = () => {
  return (
    <>

        <div className="top-header">
            <div className="title">Online Agriculture Shop</div>
        </div>
      
    </>
  )
}



export const Sidebar = () => {
  return (
    <>
       <div className="sidebar">
            <div className="menu-item "><Link to="/dashboard">Dashboard</Link></div>
            <div className="menu-item"><Link to="/products">Products</Link></div>
            <div className="menu-item"><Link to="/customers">Customers</Link></div>
            <div className="menu-item"><Link to="/farmers">Farmers</Link></div>
            <div className="menu-item"><Link to="/orders">Orders</Link></div>
            <div className="menu-item"><Link to="/">Logout</Link></div>
        </div>
    
    </>
  )
}




