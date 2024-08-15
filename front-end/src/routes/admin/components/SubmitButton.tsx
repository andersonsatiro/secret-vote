import { ListPlus } from '@phosphor-icons/react'

export function SubmitButton(){
  return(
    <button
      type="submit"
      className="flex items-center justify-center gap-2 py-3 rounded-lg bg-purple300
      transition ease-in-out duration-500 hover:bg-purple400"
    >
      <ListPlus size={20} className='text-white100' />
      <p className='text-white100 text-base'>cadastrar</p>
    </button>
  )
}