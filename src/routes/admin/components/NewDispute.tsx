import {
  PlusCircle,
  Calendar,
  IdentificationCard,
} from '@phosphor-icons/react'

import { SingleValuedInput } from './SingleValuedInput'
import { MultipleValuesInput } from './MultipleValuesInput'
import { GlobalLocationInpus } from '../../../components/GlobalLocationInputs/GlobalLocationInputs'
import { SubmitButton } from './SubmitButton'

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

  const lidar = () => {
    return false
  }

  return(
    <div className='flex flex-col items-center gap-6 p-12 shadow-box-admin bg-white100 rounded-xl'>

      <header className='w-full flex items-center justify-between'>
        <p className='text-gray950'>nova disputa</p>
        <PlusCircle
          size={20}
          className='text-green100'
        />
      </header>

      <form className='flex flex-col gap-3' method='POST' action='/lidando'>

        <SingleValuedInput
          type="number"
          placeholder="ano da campanha"
          min={2024}
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

        <GlobalLocationInpus />

        <SubmitButton />

      </form>
    </div>
  )
}