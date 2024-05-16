import Image from 'next/image'
import { Character } from '../../types/Character'
import Link from 'next/link'
import DetailedCharacter from '../../detailedCharacter/page'

interface CharacterComponentProps {
  character: Character
  favorite: React.ReactNode
  toggleDetailedId: (id: number) => void
  isDetailing: boolean
}

export function CharacterComponent({
  character: { id, name, image, status, gender, type, species, origin, location, episode, url, created }, favorite, toggleDetailedId, isDetailing
}: CharacterComponentProps) {
  
  return (
    <div className='flex min-w-[250px] rounded-md bg-slate-700'>
      {!isDetailing ? (
        <Image
        src={image}
        alt='character'
        width={100}
        height={100}
        unoptimized
        className='rounded-l-md'
      />
        ):(
          <Image
        src={image}
        alt='character'
        width={300}
        height={300}
        unoptimized
        className='rounded-l-md'
      />
        )}
      <div className='flex flex-col p-2 text-xs'>
        <button onClick={() => toggleDetailedId(id)} className='hover:scale-125 hover:font-bold hover:translate-x-3 duration-200'>{name}</button>
        <span>
          {status} - {gender}
          { isDetailing ?(
          <div className='flex-wrap'>
            <p className='font-bold'>Type:</p>{type}
            <p className='font-bold'>Species:</p>{species}
            <p className='font-bold'>Origin:</p>{origin.name}
            <p className='font-bold'>Location:</p>{location.name}
            <p className='font-bold'>Episode:</p><div className='w-10'>{episode.map((ep, index) => (
              <a key={index} href={ep}>
                <a>{ep}</a>
              </a>
            ))}</div>
            <p className='font-bold'>URL:</p>{url}
            <p className='font-bold'>Created:</p>{created}
            </div>
        ):(
          <div/>
        )}
        </span>
        {favorite}
      </div>
    </div>
  )
}