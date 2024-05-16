'use client'
import { paths } from '../const/paths'
import Link from 'next/link'
import Chatacter from '../show-everyone/Everyone'
import { getCharacter } from '../services/getCharacter'
import { CharacterComponent } from '../ui/organisms/Character'
import { Character } from '../types/Character'
import { useEffect, useState } from 'react'
import React from 'react'

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
        for (let i = 1; i <= 826; i++) {
          numbers.push(i);}
      
          return (
            <div>
              {numbers.map((number) => (
              <div>
                <Chatacter id={number} detailedId={detailedId} toggleDetailedId={toggleDetailedId} favoritePage={1} isDetailing={isDetailing}/>
              </div>
            ))}
            </div>)
        }

  const MySceneChanger = () => {
    return(
      <Link href="../" className='text-6xl font-bold mt-20 pt-20'>
        <p className='hover:text-[#45bb7a] hover:scale-110 hover:-rotate-6 duration-200 mt-20 mb-20'>See All Characters</p>
      </Link>
    )
  }


  return (
    <div className='flex-wrap'>
      {/*<p>Page</p>
      <Link href={paths.serverComponent}>Server Component</Link>
      <br />
  <Link href={paths.clientComponent}>Client Component</Link>*/}
      
      <MySceneChanger />
      <LoopComponent />
      <MySceneChanger />
      
      
    </div>
  )
}