import {GlobeHemisphereEast, CheckFat} from '@phosphor-icons/react'
import { Country } from '../../../types/country'
import { useState } from 'react'

interface CountryInputProps {
  countries: Country[],
  selectedCountry: boolean,
  setSelectedCountry: (value: boolean) => void
}
export function CountryInput({countries, selectedCountry, setSelectedCountry}: CountryInputProps) {

  const [countryOptions, setCountryOptions] = useState(false)
  const [countriesMatchSearch, setCountriesMatchSearch] = useState<Country[]>([])

  const handleCountrySearch = (value: string) => {
    setSelectedCountry(false)
    const searchValue = value.toLocaleLowerCase()

    if(searchValue.trim() !== ""){
      const filteredCountries = countries.filter(country =>
        country.nome.toLocaleLowerCase().startsWith(searchValue)
      )
      setCountriesMatchSearch(filteredCountries)
      filteredCountries.length === 0
      ? setCountryOptions(false) : setCountryOptions(true)
    } else {
      setCountryOptions(false)
    }
  }

  const changeInputValue = (country: string) => {
    const input = document.getElementById('country') as HTMLInputElement | null
    if(input){
      input.value = country
      handleCountrySearch(country)
      setCountryOptions(false)
    }
  }

  return (
    <div className='flex flex-col gap-2'>
      <div className="flex items-center relative">

        { selectedCountry
        ? <CheckFat size={20} weight="fill" className="ml-2 absolute text-green100" />
        : <GlobeHemisphereEast size={24} weight="light" className="ml-2 absolute text-purple300" />
        }

        <input
          type="text"
          name='country' 
          required
          id='country'
          className={`w-72 py-3 pl-10 pr-2 text-gray400 text-sm bg-white100 placeholder:text-gray400
          rounded-lg border-solid border-[1px] border-gray200 focus:outline-none focus:ring-1 focus:ring-gray400
          transition duration-500 hover:bg-gray50 ${selectedCountry && 'border-green100'}`}
          onChange={(e) => handleCountrySearch(e.target.value)}
          autoComplete='off'
          placeholder='escolha o país'
        />
      </div>

      { countryOptions &&  
        <ul className='w-72 rounded-lg border-solid border-[1px] border-gray200'>
          {countriesMatchSearch.slice(0, 5).map((country, index, array) => (

            <li
              key={country.nome}
              id={country.nome}
              className={`${index !== array.length - 1
                && 'border-solid border-b-[1px] border-b-gray200'} px-5 py-3 text-sm
                hover:bg-gray50 hover:cursor-pointer transition duration-300`
              }
              onClick={() => {
                changeInputValue(country.nome)
                setSelectedCountry(true)
              }}
            >
              {country.nome}
            </li>

          ))}
        </ul>
      }
    </div>
  )
}