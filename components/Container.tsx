interface ContainerProps {
  children: JSX.Element;
}
const Container = (props: ContainerProps) => {
  return (
    <div className='bg-gray-100 px-6 sm:px-12 lg:px-24'>{props.children}</div>
  )
}

export default Container;