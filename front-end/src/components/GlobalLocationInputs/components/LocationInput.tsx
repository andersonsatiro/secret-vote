import { CheckFat } from '@phosphor-icons/react'
import { Location } from '../../../types/location'
import { ElementType, useEffect, useState } from 'react'

interface LocationInputProps {
  array: Location[],
  icon: ElementType
  inputName: string,
  placeholder: string,

  needPrerequisite: boolean,
  selectedPrerequisite ?: boolean,

  selected: boolean,
  setSelected: (value: boolean) => void,

  isForeignDispute: boolean,
  setIsForeignDispute: (value: boolean) => void,
  fetchDataAPI: (search: string) => void
}
export function LocationInput({
  array,
  icon: Icon,
  inputName,
  placeholder,
  needPrerequisite,
  selectedPrerequisite,
  selected,
  setSelected,
  isForeignDispute,
  fetchDataAPI,
  setIsForeignDispute
}: LocationInputProps) {

  const [options, setOptions] = useState(false)
  const [valuesMatchSearch, setValuesMatchSearch] = useState<Location[]>([])

  const handleSearch = (value: string) => {
    setSelected(false)
    const searchValue = value.toLocaleLowerCase()

    if(searchValue.trim() !== ""){
      const filteredItems = array.filter(item =>
        item.nome.toLocaleLowerCase().startsWith(searchValue)
      )
      setValuesMatchSearch(filteredItems)
      filteredItems.length === 0
      ? setOptions(false) : setOptions(true)
    } else {
      setOptions(false)
    }
  }

  const changeInputValue = (item: Location) => {
    const inputId = inputName === 'country' ? 'country' 
    : inputName === 'state' ? 'state' 
    : 'city';

    const input = document.getElementById(inputId) as HTMLInputElement | null

    if(input){
      input.value = item.nome
      handleSearch(item.nome)
      setOptions(false)

      switch (inputName) {
        case 'country':
          if(item.nome === 'Brasil'){
            setIsForeignDispute(false)
          } else {
            setIsForeignDispute(true)
          }
          break;
        case 'state':
          fetchDataAPI(`estados/${item.sigla}/municipios`)
          break;
        default:
          break;
      }
    }
  }

  useEffect(() => {
    if(!selectedPrerequisite){
      setOptions(false)
      const input = document.getElementById(inputName) as HTMLInputElement | null
      if(input){
        input.value = ''
      }
      setSelected(false)
    }
  }, [selectedPrerequisite])

  return (
    <div className={`${isForeignDispute && inputName !== 'country' && 'hidden'} flex flex-col gap-2`}>
      <div className="flex items-center relative">

        { selected
        ? <CheckFat size={20} weight="fill" className="ml-2 absolute text-green100" />
        : <Icon size={24} weight="light" className="ml-2 absolute text-purple300" />
        }

        <input
          type="text"
          name={inputName}
          required={isForeignDispute && inputName !== 'country' ? false : true}
          id={inputName}
          className={`w-72 py-3 pl-10 pr-2 text-gray400 text-sm bg-white100 placeholder:text-gray400
          rounded-lg border-solid border-[1px] border-gray200 focus:outline-none focus:ring-1 focus:ring-gray400
          transition duration-500 hover:bg-gray50 ${selected && 'border-green100'}`}
          onChange={(e) => handleSearch(e.target.value)}
          autoComplete='off'
          placeholder={placeholder}
          disabled={needPrerequisite ? (selectedPrerequisite ? false : true) : false}
        />
      </div>

      { options &&  
        <ul className='w-72 rounded-lg border-solid border-[1px] border-gray200'>
          {valuesMatchSearch.slice(0, 5).map((item, index, array) => (

            <li
              key={item.nome}
              id={item.nome}
              className={`${index !== array.length - 1
                && 'border-solid border-b-[1px] border-b-gray200'} px-5 py-3 text-sm
                hover:bg-gray50 hover:cursor-pointer transition duration-300`
              }
              onClick={() => {
                changeInputValue(item)
                setSelected(true)
              }}
            >
              {item.nome}
            </li>

          ))}
        </ul>
      }
    </div>
  )
}