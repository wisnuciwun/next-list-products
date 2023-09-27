'use client';
import { createContext, useContext, useState, ReactNode, useEffect, useDeferredValue, useTransition } from 'react';
import { useReportWebVitals } from 'next/web-vitals'

export interface ProductsData {
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


export interface ProductApiData {
     products: ProductsData[],
     total: number,
     skip: number,
     limit: number,
}

interface SearchContextType {
     keyword: string;
     setkeyword: any;
     products: ProductApiData | null;
     setlimit: any,
     setsort: any,
     category: string,
     setcategory: any
}

const StorageContext = createContext<SearchContextType>({ keyword: '', setkeyword: null, products: null, setlimit: null, setsort: null, category: '', setcategory: null });

export const StorageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

     const [keyword, setkeyword] = useState('');
     const [sort, setsort] = useState('')
     const [products, setproducts] = useState<ProductApiData | null>(null)
     const [limit, setlimit] = useState(10)
     const [category, setcategory] = useState('')
     const [bigproducts, setbigproducts] = useState<ProductApiData | null>(null)
     const [isPending, startTransition] = useTransition()
     const lastKeyword = useDeferredValue(keyword)

     const getProductsByKeyword = async () => {
          if (lastKeyword != '') {
               let product = await fetch(`https://dummyjson.com/products/search?q=${lastKeyword}`)
               let result: ProductApiData = await product.json()
               setproducts(result)
          }
          if (lastKeyword == '' && bigproducts) {
               setproducts(bigproducts)
          }
     }

     const getProductsByPage = async () => {
          let product = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${limit - 10}`)
          let result: ProductApiData = await product.json()
          let endProduct: ProductApiData = result
          if (products != null) {
               endProduct = { ...result, products: [...products.products, ...result.products] }
          }
          setproducts(endProduct)
          setbigproducts(endProduct)
     }

     const getProductsByCategory = async () => {
          if (category != '') {
               let product = await fetch(`https://dummyjson.com/products/category/${category}`)
               let result: ProductApiData = await product.json()

               if (category == 'Remove filter') {
                    setproducts(bigproducts)
               } else {
                    setproducts(result)
               }
          }
     }

     useReportWebVitals((metric) => {
          if (metric.name == 'TTFB') {
               console.log('%cMETRIC', 'color: yellow; font-size: larger', metric)
          }
     })

     useEffect(() => {
          startTransition(() => {
               getProductsByKeyword()
          })
     }, [lastKeyword])

     useEffect(() => {
          getProductsByPage()
     }, [limit])

     useEffect(() => {
          getProductsByCategory()
     }, [category])

     useEffect(() => {
          if (sort != '' && products != null) {
               let prd = []
               if (sort.toLocaleLowerCase() == 'descending') {
                    prd = products?.products.sort((x, y) => x.price - y.price)
               } else {
                    prd = products?.products.sort((x, y) => y.price - x.price)
               }
               setproducts({ ...products, products: [...prd] })
          }
     }, [sort])

     return (
          <StorageContext.Provider value={{ keyword, setkeyword, products, setlimit, setsort, setcategory, category }}>
               {children}
          </StorageContext.Provider>
     );
};

export const useStorageContext = (): SearchContextType => {
     const context = useContext(StorageContext);
     return context;
};
