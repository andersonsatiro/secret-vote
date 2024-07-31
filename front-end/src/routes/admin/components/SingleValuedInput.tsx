import { ElementType } from "react"

interface InputProps {
  type: string,
  placeholder: string
  min: number,
  step: number,
  required: boolean,
  name: string,
  icon: ElementType,
}

export function SingleValuedInput({type, placeholder, min, step, required, name, icon:Icon}: InputProps) {
  return(
    <div className='flex items-center relative'>
      <Icon size={24} weight="light" className='absolute text-purple300 ml-2' />
      <input
        type={type}
        placeholder={placeholder}
        min={min}
        step={step}
        required={required}
        name={name}
        className="min-w-72 py-3 pl-10 pr-2 text-gray400 text-sm bg-white100 placeholder:text-gray400
        rounded-lg border-solid border-[1px] border-gray200 focus:outline-none focus:ring-1 focus:ring-gray400
        transition duration-500 hover:bg-gray50"
      />
    </div>
  )
}