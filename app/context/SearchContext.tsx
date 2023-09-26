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
     skip: number,
     limit: number
}

interface SearchContextType {
     keyword: string;
     setkeyword: any;
     products: ProductApiData | undefined;
}

const StorageContext = createContext<SearchContextType | undefined>(undefined);

export const StorageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
     const [keyword, setkeyword] = useState('');
     const [products, setproducts] = useState<ProductApiData | undefined>()

     const getProducts = async () => {
          let product = await fetch(`https://dummyjson.com/products/search?q=${keyword}`)
          let result: ProductApiData = await product.json()
          setproducts(result)
     }

     const getInitialProducts = async () => {
          let product = await fetch(`https://dummyjson.com/products`)
          let result: ProductApiData = await product.json()
          setproducts(result)
     }

     useEffect(() => {
          getProducts()
     }, [keyword])

     useEffect(() => {
          getInitialProducts()
     }, [])


     return (
          <StorageContext.Provider value={{ keyword, setkeyword, products }}>
               {children}
          </StorageContext.Provider>
     );
};

export const useStorageContext = (): SearchContextType => {
     const context = useContext(StorageContext);
     if (context === undefined) {
          throw new Error('err');
     }
     return context;
};
