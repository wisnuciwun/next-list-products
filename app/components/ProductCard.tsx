'use client'
import React from 'react'
import { ResultData } from '../product/page'
import Image from 'next/image'

export interface ProductData {
     product: ResultData
}

const ProductCard: React.FC<ProductData> = ({ product }) => {
     return (
          <section key={product.id} className='mb-20 border-solid border-2 border-sky-500 rounded-md w-80 h-80 p-2'>
               <Image className='object-cover' style={{ height: '80px' }} width={320} height={80} alt={product.title} src={product.images[0]} />
               <div className='text-lg font-[500] mb-2 mt-2'>{product.title}</div>
               <div className='text-sm flex justify-between mb-3'>
                    <span>Price {product.price}</span>
                    <span>Discount {product.discountPercentage}%</span>
               </div>
               <div className='text-sm'>
                    <div className='font-[500]'>Brand :</div>
                    <div>{product.brand}</div>
                    <div className='font-[500]'>Rating :</div>
                    <div>{product.rating}</div>
                    <div className='font-[500]'>Description :</div>
                    <div className='truncate'>{product.description}</div>
               </div>
          </section>
     )
}

export default ProductCard