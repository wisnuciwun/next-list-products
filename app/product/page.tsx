'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import { useStorageContext } from '../context/SearchContext'

const ListProduct = () => {
     const { products } = useStorageContext()

     return (
          <>
               <SearchBar />
               {
                    products != undefined ?
                         products.products.map((value, id) => <>
                              <ProductCard key={id} product={value} />
                         </>)
                         :
                         <div>Loading..</div>
               }
          </>
     )
}

export default ListProduct