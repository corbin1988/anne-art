/* eslint-disable @next/next/no-img-element */
import { H5 } from "./Title";

interface ContainerProps {
  image: string;
  title: string;
}
const Brick = (props: ContainerProps) => {
  return (
    <div  className="break-inside-avoid">
      <img src={props.image} alt={props.title}/>
      <H5 className='text-center p-2'>{props.title}</H5>
    </div>
  )
}

export default Brick;