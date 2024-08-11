import { useEffect, useState } from "react";
import { CountryInput } from "./components/CountryInput";
import { Country } from "../../types/country";
import { StateInput } from "./components/StateInput";


export function GlobalLocationInpus() {

  const [countries, setCountries] = useState<Country[]>([])
  const [selectedCountry, setSelectedCountry] = useState(false)

  const fetchDataAPI = async (endpoint: string) => {
    try {
      const response = await fetch(endpoint)
      if(!response.ok){
        return false
      }
      const data = await response.json()
      return data
    }catch(error){
      console.error('Ocorreu um erro ao buscar os dados: ', error)
    }
  }

  const fetchCountries = async () => {
    const response = await fetchDataAPI('https://servicodados.ibge.gov.br/api/v1/localidades/paises')
    if(response){
      setCountries(response)
      console.log(response)
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return(
    <div className="flex flex-col gap-3">
      <CountryInput
        countries={countries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />

      <StateInput />
    </div>
  )
}