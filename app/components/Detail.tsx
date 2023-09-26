import React from 'react'
import Image from 'next/image'
import { ProductsData } from '../context/SearchContext'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export interface ProductDetailData {
     data: ProductsData
}

const Detail: React.FC<ProductDetailData> = async ({ data }) => {
     return (
          <>
               <section key={data.id} className='border-solid border-2 border-sky-500 rounded-md p-2 w-[500px] h-fit'>
                    <Carousel showThumbs emulateTouch>
                         {
                              data.images.map(value =>
                                   <div>
                                        <Image key={data.id} className='object-cover w-full h-[400px]' width={320} height={80} alt={data.title} src={value} />
                                   </div>)
                         }
                    </Carousel>
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
                         <div className='font-[500]'>Category :</div>
                         <div>{data.category}</div>
                    </div>
               </section>

          </>
     )
}

export default Detail