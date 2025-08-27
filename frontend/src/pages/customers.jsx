import React from 'react'
import List from '../components/List.jsx'

function customers() {
  return (
    <div>
      <div className="">
          <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Customers</h2>
          <button>Add Customer</button>
      </div>
      <div className="searchBar and filters"></div>
      <List/>
    </div>
  )
}

export default customers
