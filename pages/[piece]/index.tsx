/* eslint-disable @next/next/no-img-element */
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import { H2 } from "../../components/Title";

export default function Piece() {
  const imageSrc = '/art'
  const post = {
    image:`${imageSrc}/piece_1.jpeg`,
    title: 'Painting One',
    description: 'PBR&B bitters direct trade XOXO put a bird on it raclette meggings tofu +1 yr raw denim. Butcher shoreditch cloud bread, same sus trust fund chartreuse skateboard portland af.',
    route: 'painting-one',
    width: 120,
    height: 180,
    date: 2014,
    type: 'Oil Canvas'
  };
  return (
    <>
      <Navbar />
      <Container>
        <div className="flex flex-col md:flex-row p-8">
          <div className="w-full md:w-2/4 p-8">
            <img className="" src={post.image} alt={post.title}/>
          </div>
          <div className="flex flex-col justify-between w-full md:w-2/4 p-8 h-60">
            <H2>{post.title}</H2>
            <div className="flex w-full">
              <div className="flex flex-col justify-between h-24">
                <div className="flex align-middle">
                  <span className="font-semibold mr-2">Year: </span> <span>{post.date}</span>
                </div>
                <div className="flex align-middle">
                  <span className="font-semibold mr-2">Medium: </span> <span>{post.type}</span>
                </div>
                <div className="flex align-middle">
                  <span className="font-semibold mr-2">Size: </span><span>{ post.width }cm { post.height}cm </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
