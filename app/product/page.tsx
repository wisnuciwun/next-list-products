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
          <div ref={scrollRef as React.RefObject<HTMLDivElement>} style={{ overflowY: 'scroll', height: '100vh' }} className="flex min-h-screen gap-3 items-center justify-center p-24 flex-wrap">

               {
                    products?.products != null ?
                         <>
                              <SearchBar />
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