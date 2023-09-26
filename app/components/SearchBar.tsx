'use client'
import React from 'react'
import { createContext, useContext, useState } from "react";
import { useSearchKeyword } from '../context/SearchContext';

export interface SearchBarParam {
     onChange: any,
     value: string
}

const SearchBar = () => {
     const { keyword, setkeyword } = useSearchKeyword();

     return (
          <>
               <input type="text" onChange={(e) => setkeyword(e.target.value)} className='border-solid border-2 border-sky-500 rounded-md p-2 w-full' />
          </>
     )
}

export default SearchBar