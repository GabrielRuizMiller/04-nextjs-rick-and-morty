'use client'
import { paths } from './const/paths'
import Link from 'next/link'
import Chatacter from './show-everyone/Everyone'
import { getCharacter } from './services/getCharacter'
import { CharacterComponent } from './ui/organisms/Character'
import { Character } from './types/Character'
import { useEffect, useState } from 'react'
import React from 'react'
import { z } from 'zod'

const feedbackSchema = z.object({
  name: z.string().min(5),
  subject: z.string(),
  comments: z.string().optional(),
})

export default function Home() {
  const detailedKey = `detailed${0}`;
  
      const [isDetailing, setIsDetailing] = useState<boolean>(() => {
        const fav = localStorage.getItem(detailedKey);
        return fav ? JSON.parse(fav) : false;
      });

      const toggleDetailed = () => setIsDetailing(!isDetailing);

      const [detailedId, setDetailedId] = useState<number>(() => {
        const fav = localStorage.getItem(detailedKey);
        return fav ? JSON.parse(fav) : 0;
        //setIsDetailing(false); Esto
      });

      const toggleDetailedId = (id: number) => {
        setDetailedId(id);
        toggleDetailed();
      };

      

  const LoopComponent = () => {
  // <= 827
  const numbers = [];
  for (let i = 1; i <= 20; i++) {
    numbers.push(i);}

    return (
      <div>
        {numbers.map((number) => (
        <div key={number}>
          <Chatacter id={number} detailedId={detailedId} toggleDetailedId={toggleDetailedId} favoritePage={0} isDetailing={isDetailing}/>
        </div>
      ))}
      </div>)
  }

  

    const MySceneChanger = () => {

    return(
      <div>
        
        
        <Link href="./favoritesPage" className='text-6xl font-bold mt-20 pt-20'>
        <p className='hover:text-[#bb4545] hover:scale-110 hover:-rotate-6 duration-200 mt-20 mb-20'>Favorite Characters</p>
      </Link>
      </div>
      
    )
  }


  return (
    <div className='flex-wrap'>
      {/*<p>Page</p>
      <Link href={paths.serverComponent}>Server Component</Link>
      <br />
  <Link href={paths.clientComponent}>Client Component</Link>*/}
      
      <p className='text-7xl text-center font-bold mt-5 pt-5'>
        <p className='text-[#81afff] hover:text-[rgb(117,254,233)] hover:scale-110 duration-200 mt-5 mb-20'>Gabriel Ruiz Miller<br/>A00835179<br/>Tarea Rick y Morty</p>
      </p>
      <MySceneChanger />
      <LoopComponent />
      <MySceneChanger />
      
      
    </div>
  )
}