'use client'
import React, { useEffect, useState } from 'react'
import { useStorageContext } from '../context/SearchContext';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export interface SearchBarParam {
     onChange: any,
     value: string
}

const HeaderBar = () => {
     const { keyword, setkeyword, setsort, setcategory } = useStorageContext();
     const [categories, setcategories] = useState<[]>([])

     const getCategories = async () => {
          const detailProductApi = await fetch(`https://dummyjson.com/products/categories`, { cache: 'force-cache' })
          const result: [] = await detailProductApi.json()
          setcategories(result)
     }


     useEffect(() => {
          getCategories()
     }, [])

     return (
          <div className='flex w-full gap-2'>
               <input placeholder='Search your product' type="text" value={keyword} onChange={(e) => setkeyword(e.target.value)} className='border-solid border-2 border-zinc-500 rounded-md p-2 w-full' />
               <Dropdown placeholder='Sort...' options={['Ascending', 'Descending']} onChange={(v) => setsort(v.value)} />
               <Dropdown className='w-80' placeholder='Category...' options={['Remove filter', ...categories]} onChange={(v) => setcategory(v.value)} />
          </div>
     )
}

export default HeaderBar