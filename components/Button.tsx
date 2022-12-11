interface ButtonProps {
  children: string | JSX.Element;
  className?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`${props.className} py-3 px-5 text-sm font-medium text-center bg-black text-white rounded-sm bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}>
      {props.children}
    </button>
  )
}

export default Button;