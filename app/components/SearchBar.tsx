'use client'
import React from 'react'
import { createContext, useContext, useState } from "react";
import { useStorageContext } from '../context/SearchContext';
// import { useSearchKeyword } from '../context/SearchContext';

export interface SearchBarParam {
     onChange: any,
     value: string
}

const SearchBar = () => {
     const { keyword, setkeyword } = useStorageContext();

     return (
          <>
               <input placeholder='Search your product here' type="text" value={keyword} onChange={(e) => setkeyword(e.target.value)} className='border-solid border-2 border-sky-500 rounded-md p-2 w-full' />
          </>
     )
}

export default SearchBar