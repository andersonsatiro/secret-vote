import { useEffect } from "react"

export function StateInput(){

  const fetchStates = async () => {
    try {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/paises')
      if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()
      console.log(data[0])
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchStates()
  }, [])
  return(
    <div>
      <input type="text" />
    </div>
  )
}



/*
Obtém o conjunto de municípios do Brasil
https://servicodados.ibge.gov.br/api/v1/localidades/municipios

*/