import { useEffect, useState } from "react";
import { Location } from "../../types/location";
import { LocationInput } from "./components/LocationInput";
import { GlobeHemisphereEast, MapTrifold, City } from '@phosphor-icons/react'


export function GlobalLocationInpus() {

  const [countries, setCountries] = useState<Location[]>([])
  const [selectedCountry, setSelectedCountry] = useState(false)

  const [states, setStates] = useState<Location[]>([])
  const [selectedState, setSelectedState] = useState(false)

  const [cities, setCities] = useState<Location[]>([])
  const [selectedCity, setSelectedCity] = useState(false)

  const [isForeignDispute, setIsForeignDispute] = useState(true)

  const fetchDataAPI = async (search: string) => {

    const endpoint = `https://servicodados.ibge.gov.br/api/v1/localidades/${search}`

    try {
      const response = await fetch(endpoint)
      if(!response.ok){
        return false
      }
      const data = await response.json()

      if(search === 'paises'){
        setCountries(data)
      } else if(search === 'estados'){
        setStates(data)
      } else {
        setCities(data)
      }
      
    }catch(error){
      console.error('Ocorreu um erro ao buscar os dados: ', error)
    }
  }

  useEffect(() => {
    fetchDataAPI('paises')
    fetchDataAPI('estados')
  }, [])

  return(
    <div className="flex flex-col gap-3">

      <LocationInput
        array={countries}
        icon={GlobeHemisphereEast}
        inputName="country"
        placeholder="escolha o país"

        needPrerequisite={false}

        selected={selectedCountry}
        setSelected={setSelectedCountry}

        isForeignDispute={isForeignDispute}
        setIsForeignDispute={setIsForeignDispute}
        fetchDataAPI={fetchDataAPI}
      /> 

      <LocationInput
        array={states}
        icon={MapTrifold}
        inputName="state"
        placeholder="escolha o estado"

        needPrerequisite={true}
        selectedPrerequisite={selectedCountry}

        selected={selectedState}
        setSelected={setSelectedState}

        isForeignDispute={isForeignDispute}
        setIsForeignDispute={setIsForeignDispute}
        fetchDataAPI={fetchDataAPI}
      /> 

      <LocationInput
        array={cities}
        icon={City}
        inputName="city"
        placeholder="escolha a cidade"

        needPrerequisite={true}
        selectedPrerequisite={selectedState}

        selected={selectedCity}
        setSelected={setSelectedCity}

        isForeignDispute={isForeignDispute}
        setIsForeignDispute={setIsForeignDispute}
        fetchDataAPI={fetchDataAPI}
      /> 

    </div>
  )
}