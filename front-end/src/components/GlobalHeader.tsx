import { CaretDown, HandPointing, Camera } from '@phosphor-icons/react'
import secretVoteLogo from '../assets/secret-vote-logo.png'
import { useState } from 'react'

interface GlobalHeaderProps {
  navIsActive: boolean
}

export function GlobalHeader({navIsActive}: GlobalHeaderProps){

  const [profileModalIsActive, setProfileModalIsActive] = useState(false)

  return(
    <header id='header' className='flex items-center justify-between px-20 py-6 border-b-solid border-b-[1.5px] border-b-gray50'>

      <div className='flex items-center gap-4'>
        <img
          src={secretVoteLogo}
          alt="Logo do site 'Voto Secreto'"
          className='w-12 h-12'
        />
        <h4 className='text-lg text-black font-semibold'>
          Eleições<span className='text-purple300'>2024</span>
        </h4>
      </div>

      { navIsActive &&
        <nav className='flex gap-8 text-black font-normal'>
          <a className='hover:cursor-pointer hover:text-purple300 hover:underline' href="#nordeste">Nordeste</a>
          <a className='hover:cursor-pointer hover:text-purple300 hover:underline' href="#sudeste">Sudeste</a>
          <a className='hover:cursor-pointer hover:text-purple300 hover:underline' href="#sul">Sul</a>
          <a className='hover:cursor-pointer hover:text-purple300 hover:underline' href="#norte">Norte</a>
          <a className='hover:cursor-pointer hover:text-purple300 hover:underline' href="#centro-oeste">Centro-Oeste</a>
        </nav>
      }

      <div className='relative'>

        <div className='flex items-center gap-2'>
          <p className='font-medium text-purple300'>
            👋 Olá,
            <span className='font-semibold'> Eleitor!</span>
            {profileModalIsActive && ' navegue'}
          </p>
          <CaretDown
            onClick={() => setProfileModalIsActive(!profileModalIsActive)}
            size={16}
            weight='bold'
            className='text-purple400 hover:cursor-pointer hover:text-black'
          />
        </div>

        {profileModalIsActive &&
          <div className='absolute w-full mt-2 text-sm text-gray500 bg-white100 rounded-lg shadow-modal'>

            <button
              className='w-full flex items-center justify-between px-4 py-3 border-b-solid
              border-b-[1px] border-b-gray50 hover:bg-purple100 hover:rounded-t-lg'
            >
              <p>Simulador de urna</p>
              <HandPointing className='text-purple300' />
            </button>

            <button
              className='w-full flex items-center justify-between px-4 py-3 hover:rounded-b-lg hover:bg-purple100'
            >
              <p>Tô com meu prefeito</p>
              <Camera className='text-purple300'/>
            </button>

          </div>
        }
      </div>
    </header>
  )
}