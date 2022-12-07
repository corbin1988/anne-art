interface TextfieldProps {
  id: string;
  rows?: number;
  placeholder: string;
  label: string;
}
const Textfield = (props: TextfieldProps) => {
  return (
    <div>
      <label htmlFor={props.id} className="block mb-2 text-sm font-medium">{props.label}</label>
      <textarea 
        rows={props.rows} 
        id={props.id}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
        placeholder={props.placeholder}
      ></textarea>
    </div>
  )
}

export default Textfield;