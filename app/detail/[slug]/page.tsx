'use client'
import Detail from '@/app/components/Detail';
import { ResultData } from '@/app/product/page';
import { useParams } from 'next/navigation';
import React from 'react'

const ProductDetail = async () => {
     const param = useParams();
     let productDetail = await fetch(`https://dummyjson.com/products/${param.slug}`)
     let result: ResultData = await productDetail.json()


     return (
          <div className="flex min-h-screen gap-3 items-center justify-center p-24 flex-wrap">
               <Detail data={result} />
          </div>
     )
}

export default ProductDetail