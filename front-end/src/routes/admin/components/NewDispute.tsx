import { PlusCircle } from '@phosphor-icons/react'

export function NewDispute(){
  return(
    <div className='flex flex-col items-center gap-6 p-12 shadow-box-admin bg-white100'>

      <header className='flex items-center justify-between'>
        <p className='text-gray950'>nova disputa</p>
        <PlusCircle
          size={24}
          className='text-green100'
        />
      </header>

      <form action="" className='flex flex-col gap-3'>
        <input
          type="number"
          placeholder='ano da campanha'
          min={2024}
          step={2}
        />

        <select name="" id="">
          <optgroup>
            <caption>munincipal </caption>
            <option value="vereador">111</option>
            <option value="vereador">222</option>
            <option value="vereador">333</option>
          </optgroup>

          <optgroup>
            <option value="vereador">111</option>
            <option value="vereador">222</option>
            <option value="vereador">333</option>
          </optgroup>
        </select>

        <input type="submit" />
      </form>
    </div>
  )
}