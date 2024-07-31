import { ElementType } from "react"

interface InputProps {
  name: string,
  required: boolean,
  data: {
    type: string,
    jobs: string[]
  }[],
  icon: ElementType
}
export function MultipleValuesInput({name, required, data, icon:Icon}: InputProps) {
  return(
    <div className="flex items-center relative">
      <Icon size={24} weight="light" className="ml-2 absolute text-purple300" />

      <select
        name={name}
        required={required}
        className="min-w-72 py-3 pl-10 appearance-none text-gray400 text-sm bg-white100
        rounded-lg border-solid border-[1px] border-gray200 focus:outline-none focus:ring-1
        focus:ring-gray400 transition duration-500 hover:bg-gray50 hover:cursor-pointer"
      >
        <option disabled selected hidden value="">escolha o tipo de cargo</option>
        {data.map(item => 
          <optgroup
            key={item.type}
            label={item.type}
            className="bg-white100"
          >      
            
            {item.jobs.map(option =>
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            )}

          </optgroup>
        )}
      </select>
    </div>
  )
}