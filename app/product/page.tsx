'use client'
import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import { useStorageContext } from '../context/SearchContext'
import { useBottomScrollListener } from 'react-bottom-scroll-listener';


const ListProduct = () => {
     const { products, setlimit } = useStorageContext()
     const scrollRef = useBottomScrollListener(() => {
          setlimit((prev: number) => prev + 10)
     });

     return (
          <div ref={scrollRef as React.RefObject<HTMLDivElement>} className="flex h-screen pl-12 pr-12 pb-10 overflow-y-auto gap-3 items-center flex-wrap justify-center">
               {
                    products?.products != null ?
                         <>
                              {
                                   products.products.map((value, id) => <>
                                        <ProductCard key={id} product={value} />
                                   </>)
                              }
                         </>
                         :
                         <div>Loading..</div>
               }
          </div>
     )
}

export default ListProduct