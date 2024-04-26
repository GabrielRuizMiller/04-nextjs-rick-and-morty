'use client'
import { paths } from '../const/paths'
import Link from 'next/link'
import Chatacter from '../show-everyone/Everyone'
import { getCharacter } from '../services/getCharacter'
import { CharacterComponent } from '../ui/organisms/Character'
import { Character } from '../types/Character'
import { useEffect, useState } from 'react'
import React from 'react'
import { useRouter } from 'next/router'

interface Detailed{
  id: number;

}


export function MyComponent({id}: Detailed) {

  const GoToMain = () => {
    return(
      <Link href="../" className='text-6xl font-bold mt-20 pt-20'>
        <p className='hover:text-[#45bb7a] hover:scale-110 hover:-rotate-6 duration-200 mt-20 mb-20'>See All Characters</p>
      </Link>
    )
  }

  const GoToFavorites = () => {
    return(
      <Link href="./favoritesPage" className='text-6xl font-bold mt-20 pt-20'>
        <p className='hover:text-[#bb4545] hover:scale-110 hover:-rotate-6 duration-200 mt-20 mb-20'>Favorite Characters</p>
      </Link>
    )
  }


  return (
    <div className='flex-wrap'>
      
      <GoToMain />
      <GoToFavorites />
      
      
    </div>
  )
}

export default MyComponent;