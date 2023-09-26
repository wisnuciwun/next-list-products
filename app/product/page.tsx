import React from 'react'
import ProductCard from '../components/ProductCard'

export interface ResultData {
     id: string,
     title: string,
     description: string,
     price: number,
     discountPercentage: number,
     rating: number,
     stock: number,
     brand: string,
     category: string,
     thumbnail: string,
     images: ['']
}

interface ResultApiData {
     products: ResultData[],
     total: number,
     skip: number,
     limit: number
}

const ListProduct = async () => {
     let product = await fetch('https://dummyjson.com/products')
     let result: ResultApiData = await product.json()

     return (
          <>
               {result.products.map((value, id) => <>
                    <ProductCard key={id} product={value} />
               </>)}
          </>
     )
}

export default ListProduct