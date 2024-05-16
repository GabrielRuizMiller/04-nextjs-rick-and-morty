// components/MyComponent.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MyCharacter from '../client-character/page'
import { getCharacter } from '../services/getCharacter';
import { CharacterComponent } from '../ui/organisms/Character';
import { Character } from '../types/Character';
import { useEffect, useState } from 'react';
import DetailedChatacter from '../detailedCharacter/page';

interface Everyone {
    id: number;
    detailedId: number;
    toggleDetailedId: (id: number) => void;
    favoritePage: number;
    isDetailing: boolean;
    // 0 = main , 1 = favorites , 2 = detailed
}


export function MyComponent({ detailedId, id, toggleDetailedId, favoritePage, isDetailing }: Everyone) {

  const favoriteKey = `favorite_${id}`;
  
  const [isFavorite, setIsFavorite] = useState<boolean>(() => {
    const fav = localStorage.getItem(favoriteKey);
    return fav ? JSON.parse(fav) : false;
  });

    const [character, setCharacter] = useState<Character | undefined>(undefined)

  useEffect(() => {
    const loadCharacter = async () => {
      const data = await getCharacter(id)
      setCharacter(data)
    }
    void loadCharacter()
  }, [id])


  useEffect(() => {
    localStorage.setItem(favoriteKey, JSON.stringify(isFavorite));
  }, [isFavorite, favoriteKey]);

  if (!character || (favoritePage == 1 && isFavorite == false) || (isDetailing==true && detailedId != id)) return null
  return <div> <CharacterComponent character={character} favorite={
    <div>
    <button onClick={() => setIsFavorite(!isFavorite)} className='hover:scale-125 hover:-rotate-6 hover:translate-x-5 duration-200'>
    {/*{isFavorite ? '❤️' : '🤍'}*/}
    {isFavorite ?(
      <Image src="/HeartYF.png" alt="GOL" width={25} height={25} className="relative" />

    ):(
      <Image src="/HeartNF.png" alt="GOL" width={25} height={25} className="relative" />
    )}
  </button>
  
  </div>
  } toggleDetailedId={toggleDetailedId} isDetailing={(isDetailing==true && detailedId == id)}/>
  </div>
}

export default MyComponent;