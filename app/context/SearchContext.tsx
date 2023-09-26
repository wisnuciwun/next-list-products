'use client';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

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
     // skip: number,
     limit: number,
}

interface SearchContextType {
     keyword: string;
     setkeyword: any;
     products: ProductApiData | null;
     setlimit: any,
}

const StorageContext = createContext<SearchContextType>({ keyword: '', setkeyword: () => { }, products: null, setlimit: () => { } });

export const StorageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

     const [keyword, setkeyword] = useState('');
     const [products, setproducts] = useState<ProductApiData | null>(null)
     const [limit, setlimit] = useState(10)
     // const [skip, setskip] = useState(0)
     const [lastLimit, setlastLimit] = useState(10)
     const [bigproducts, setbigproducts] = useState<ProductApiData | null>(null)


     const getProducts = async () => {
          if (keyword != '') {
               let product = await fetch(`https://dummyjson.com/products/search?q=${keyword}`)
               let result: ProductApiData = await product.json()
               setproducts(result)
          }
          if (keyword == '' && bigproducts) {
               setproducts(bigproducts)
          }
     }

     const getInitialProducts = async () => {
          let product = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${limit - 10}`)
          let result: ProductApiData = await product.json()
          let endProduct: ProductApiData = result
          if (products != null) {
               endProduct = { ...result, products: [...products.products, ...result.products] }
          }
          setproducts(endProduct)
          setbigproducts(endProduct)
     }

     useEffect(() => {
          getProducts()
     }, [keyword])

     useEffect(() => {
          getInitialProducts()
     }, [limit])

     return (
          <StorageContext.Provider value={{ keyword, setkeyword, products, setlimit }}>
               {children}
          </StorageContext.Provider>
     );
};

export const useStorageContext = (): SearchContextType => {
     const context = useContext(StorageContext);
     return context;
};
