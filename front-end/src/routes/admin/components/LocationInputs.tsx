import { ElementType, useEffect, useState } from "react"

interface LocationProps {
  name: string,
  required: boolean,
  disabled: boolean,
  icon: ElementType
}

export function LocationInputs({name, required, disabled, icon: Icon}:LocationProps) {

  const [listItems, setListItems] = useState<string[]>([])
  const [searchValue, setSearchValue] = useState<string>()

  const fetchDataAPI = async () => {
    try {
      const response = await fetch(
        'https://parseapi.back4app.com/classes/StateProvince?limit=27&order=name&include=country&keys=name,country.emoji,country.capitalName',
        {
          headers: {
            'X-Parse-Application-Id': 'QiGq93pW2KO3xAHlLNFoJjg1kM3qYMhiLEtTPwYq',
            'X-Parse-Master-Key': 'gv6cOhHXeNwNWzDsObRXEe67BwpVhddUIVwVPR5C',
          }
        }
      )
      const data = await response.json()
      return data
    }catch(error){
      console.error("Ocorreu um erro: ", error)
    }
  }

  useEffect(() => {
    fetchDataAPI().then(({results}) => {
      const matchedTheSearch = results.filter((result) => console.log(result))
    })
  }, [searchValue])

  return(
    <div className="flex flex-col gap-1">
      <div className="flex items-center relative">
        <Icon
          size={24}
          weight="light"
          className="ml-2 absolute text-purple300"
        />
        <input
          type="text"
          name={name}
          required={required}
          disabled={disabled}
          placeholder={`selecione ${name === 'country' ? 'o país' : name === 'state' ? 'o estado' : 'a cidade'}`}
          className="min-w-72 py-3 pl-10 appearance-none text-gray400 text-sm bg-white100
          rounded-lg border-solid border-[1px] border-gray200 focus:outline-none focus:ring-1
          focus:ring-gray400 transition duration-500 hover:bg-gray50 hover:cursor-pointer
          placeholder-gray400 disabled:opacity-75 disabled:hover:cursor-not-allowed disabled:hover:bg-white100"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      {listItems.length > 0 && 
      <div className="flex flex-col w-full rounded-lg border-solid border-[1px] border-gray400">
        <span
          className="px-5 py-2 text-sm text-gray400
          border-solid border-b-[1px] border-b-gray200"
        >
          São Gonçalo do Amarante, RN
        </span>
        <span>texto 2</span>
        <span>texto 3</span>
      </div>
      }

    </div>
  )
}