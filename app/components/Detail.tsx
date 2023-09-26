import React from 'react'
import { ResultData } from '../product/page'
import Image from 'next/image'

export interface ProductDetailData {
     data: ResultData
}

const Detail: React.FC<ProductDetailData> = async ({ data }) => {
     return (
          <>
               <section key={data.id} style={{ width: '100%', height: '100%' }} className='border-solid border-2 border-sky-500 rounded-md p-2'>
                    <Image className='object-cover' style={{ height: '400px', width: '100%' }} width={320} height={80} alt={data.title} src={data.images[0]} />
                    <div className='text-lg font-[500] mb-2 mt-2'>{data.title}</div>
                    <div className='text-sm flex justify-between mb-3'>
                         <span>Price {data.price}</span>
                         <span>Discount {data.discountPercentage}%</span>
                    </div>
                    <div className='text-sm'>
                         <div className='font-[500]'>Brand :</div>
                         <div>{data.brand}</div>
                         <div className='font-[500]'>Rating :</div>
                         <div>{data.rating}</div>
                         <div className='font-[500]'>Description :</div>
                         <div>{data.description}</div>
                    </div>
               </section>

          </>
     )
}

export default Detail