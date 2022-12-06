interface MasonryContainerProps {
  children: JSX.Element;
}
const MasonryContainer = (props: MasonryContainerProps) => {
  return (
    <div className='sm:columns-2 md:columns-3 lg:gap-8 w-full mx-auto space-y-3 py-10'>{props.children}</div>
  )
}

export default MasonryContainer;