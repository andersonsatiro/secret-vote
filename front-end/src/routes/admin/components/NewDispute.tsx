import {
  PlusCircle,
  Calendar,
  IdentificationCard,
  GlobeHemisphereEast,
  MapTrifold, 
  City,
} from '@phosphor-icons/react'

import { SingleValuedInput } from './SingleValuedInput'
import { MultipleValuesInput } from './MultipleValuesInput'
import { LocationInputs } from './LocationInputs'

const dataForJobTypes = [
  {
    type: "municipal",
    jobs: ["vereador", "prefeito"],
  },

  {
    type: "nacional",
    jobs: ["presidente", "senador", "deputado federal", "governador", "deputado estadual"],
  },
]

export function NewDispute(){
  return(
    <div className='flex flex-col items-center gap-6 p-12 shadow-box-admin bg-white100 rounded-xl'>

      <header className='w-full flex items-center justify-between'>
        <p className='text-gray950'>nova disputa</p>
        <PlusCircle
          size={20}
          className='text-green100'
        />
      </header>

      <form action="" className='flex flex-col gap-3'>

        <SingleValuedInput
          type="number"
          placeholder="ano da campanha"
          min={2024}
          step={2}
          required={true}
          name="year"
          icon={Calendar}
        />

        <MultipleValuesInput
          name="type"
          required={true}
          data={dataForJobTypes}
          icon={IdentificationCard}
        />

        <LocationInputs
          name="country"
          required={true}
          disabled={false}
          icon={GlobeHemisphereEast}
        />

        <LocationInputs
          name="state"
          required={true}
          disabled={true}
          icon={MapTrifold}
        />

        <LocationInputs
          name="city"
          required={true}
          disabled={true}
          icon={City}
        />

        <input type="submit"/>

      </form>
    </div>
  )
}