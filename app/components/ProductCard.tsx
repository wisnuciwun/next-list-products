'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductsData } from '../context/SearchContext'
import Rating from './Rating'

export interface ProductData {
     product: ProductsData
}

const ProductCard: React.FC<ProductData> = ({ product }) => {
     return (
          <Link key={product.id} href={`detail/${product.id}`}>
               <section className='border-solid border-2 border-sky-500 rounded-md w-[370px] h-80 p-2 cursor-pointer'>
                    <div className='width-[300px] height-[80px] relative'>
                         <Image className='object-cover h-[80px] w-full' width={300} style={{ height: '80px' }} height={0} alt={product.title} src={product.thumbnail} />
                         {
                              product.stock > 0 ?
                                   <span className="right-0 bottom-0 mb-2 absolute bg-green-100 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Available</span>
                                   :
                                   <span className="right-0 bottom-0 mb-2 absolute bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Empty stock</span>
                         }
                    </div>
                    <div className='text-lg font-[500] mb-2 mt-2 line-clamp-1'>{product.title}</div>
                    <div className='text-sm flex justify-between mb-3'>
                         <span>Price ${product.price}</span>
                         <span>Discount {product.discountPercentage}%</span>
                    </div>
                    <div className='text-sm'>
                         <div className='font-[500]'>Brand :</div>
                         <div>{product.brand}</div>
                         <div className='font-[500]'>Rating :</div>
                         <Rating rate={product.rating} />
                         <div className='font-[500]'>Description :</div>
                         <div className='line-clamp-2'>{product.description}</div>
                    </div>
               </section>
          </Link>
     )
}

export default ProductCard