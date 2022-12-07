/* eslint-disable @next/next/no-img-element */
import { H5 } from "./Title";
import Link from 'next/link';

interface ContainerProps {
  image: string;
  title: string;
  route: string;
}
const Brick = (props: ContainerProps) => {
  return (
    <div  className="break-inside-avoid">
      <Link href={props.route}>
        <img src={props.image} alt={props.title}/>
        <H5 className='text-center p-2'>{props.title}</H5>
      </Link>
    </div>
  )
}

export default Brick;