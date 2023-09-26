'use client'
import React from 'react'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import { useStorageContext } from '../context/SearchContext'

const ListProduct = () => {
     const { products } = useStorageContext()

     return (
          <>
               <SearchBar />
               {
                    products?.products != null ?
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