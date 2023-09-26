'use client'
import Detail from '@/app/components/Detail';
import { ProductsData } from '@/app/context/SearchContext';
import { useParams } from 'next/navigation';
import React, { use } from 'react'


async function getDetailProduct(param: any): Promise<ProductsData> {
     const detailProductApi = await fetch(`https://dummyjson.com/products/${param}`)
     const result: ProductsData = await detailProductApi.json()
     return result
}

const ProductDetail = () => {
     const param = useParams();
     const result: ProductsData = use(getDetailProduct(param.slug));


     return (
          <div className="flex h-screen gap-3 items-center justify-center p-12 flex-wrap overflow-y-auto">
               <Detail data={result} />
          </div>
     )
}

export default ProductDetail