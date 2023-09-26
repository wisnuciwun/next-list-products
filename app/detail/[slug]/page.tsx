'use client'
import Detail from '@/app/components/Detail';
import { ResultData } from '@/app/product/page';
import { useParams } from 'next/navigation';
import React, { use } from 'react'


async function getDetailProduct(param: any): Promise<ResultData> {
     const detailProductApi = await fetch(`https://dummyjson.com/products/${param}`)
     const result: ResultData = await detailProductApi.json()
     return result
}

const ProductDetail = () => {
     const param = useParams();
     const result: ResultData = use(getDetailProduct(param.slug));


     return (
          <div className="flex min-h-screen gap-3 items-center justify-center p-24 flex-wrap">
               <Detail data={result} />
          </div>
     )
}

export default ProductDetail