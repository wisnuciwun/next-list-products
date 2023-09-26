'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductsData } from '../context/SearchContext'

export interface ProductData {
     product: ProductsData
}

const ProductCard: React.FC<ProductData> = ({ product }) => {
     return (
          <Link key={product.id} href={`detail/${product.id}`}>
               <section className='border-solid border-2 border-sky-500 rounded-md w-[370px] h-80 p-2 cursor-pointer'>
                    <Image className='object-cover' width={320} style={{ height: '80px' }} height={0} alt={product.title} src={product.thumbnail} />
                    <div className='text-lg font-[500] mb-2 mt-2 line-clamp-1'>{product.title}</div>
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
                         <div className='line-clamp-2'>{product.description}</div>
                    </div>
               </section>
          </Link>
     )
}

export default ProductCard