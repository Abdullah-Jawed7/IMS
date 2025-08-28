import React, { useState } from 'react'
import List from '../components/List.jsx'
import { Search } from 'lucide-react'

function customers() {
  const [searchTerm ,setSearchTerm] = useState('')
  const [filters ,setFilters] = useState('')
  const categories = ["All", "Electronics", "Clothing", "Photography", "Furniture", "Lifestyle"]
  const brands = ["All", "TechBrand", "FitTech", "EcoWear", "LensMaster", "ComfortPlus", "HydroLife"]
  return (
    <div className='px-3'>
      <div className="flex justify-between px-4 ">
          <h2 className="text-[#0d141c] text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Customers</h2>
          <div className="flex items-center">

          <button className='text-base font-semibold  py-3 text-white px-2 rounded bg-[#6da1d8]'>Add Customer</button>
          </div>
      </div>

        <div className='flex px-4'>
            <div className="flex min-w-full w-full lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap  gap-4">
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="">All Categories</option>
              {categories.slice(1).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={filters.brand}
              onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="">All Brands</option>
              {brands.slice(1).map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>

            {/* <select
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="">All Prices</option>
              <option value="0-50">$0 - $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100-300">$100 - $300</option>
              <option value="300+">$300+</option>
            </select> */}
          </div>
    
        </div>
      </div>
      <List/>
    </div>
  )
}

export default customers
