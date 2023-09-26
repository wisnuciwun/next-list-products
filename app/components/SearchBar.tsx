'use client'
import React from 'react'
import { useStorageContext } from '../context/SearchContext';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export interface SearchBarParam {
     onChange: any,
     value: string
}

const SearchBar = () => {
     const { keyword, setkeyword, setsort } = useStorageContext();

     return (
          <div className='flex w-full gap-2'>
               <input placeholder='Search your product' type="text" value={keyword} onChange={(e) => setkeyword(e.target.value)} className='border-solid border-2 border-zinc-500 rounded-md p-2 w-full' />
               <Dropdown placeholder='Sort...' options={['Ascending', 'Descending']} onChange={(v) => setsort(v.value)} />
          </div>
     )
}

export default SearchBar