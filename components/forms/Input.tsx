interface InputProps {
  type: string;
  placeholder: string;
  label: string;
}
const Input = (props: InputProps) => {
  return (
    <div>
      <label htmlFor={props.type} className="block mb-2 text-sm font-medium">{props.label}</label>
      <input 
        type={props.type}
        id={props.type}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
        placeholder={props.placeholder}
        required 
      />
    </div>
  )
}

export default Input