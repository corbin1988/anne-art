import Brick from '../components/Brick';
import Container from '../components/Container';
import MasonryContainer from '../components/MasonryContainer';
import Navbar from '../components/Navbar';

const imageSrc = '/art'
const posts = [
  {
    image:`${imageSrc}/piece_1.jpeg`,
    title: 'Painting One',
    description: 'PBR&B bitters direct trade XOXO put a bird on it raclette meggings tofu +1 yr raw denim. Butcher shoreditch cloud bread, same sus trust fund chartreuse skateboard portland af.'
  },
  {
    image:`${imageSrc}/piece_2.jpeg`,
    title: 'Painting Two',
    description: 'PBR&B bitters direct trade XOXO put a bird on it raclette meggings tofu +1 yr raw denim. Butcher shoreditch cloud bread, same sus trust fund chartreuse skateboard portland af.'
  },
  {
    image:`${imageSrc}/piece_3.jpeg`,
    title: 'Painting Three',
    description: 'PBR&B bitters direct trade XOXO put a bird on it raclette meggings tofu +1 yr raw denim. Butcher shoreditch cloud bread, same sus trust fund chartreuse skateboard portland af.'
  },
  {
    image:`${imageSrc}/piece_4.jpeg`,
    title: 'Painting Four',
    description: 'PBR&B bitters direct trade XOXO put a bird on it raclette meggings tofu +1 yr raw denim. Butcher shoreditch cloud bread, same sus trust fund chartreuse skateboard portland af.'
  },
  {
    image:`${imageSrc}/piece_5.jpeg`,
    title: 'Painting Five',
    description: 'PBR&B bitters direct trade XOXO put a bird on it raclette meggings tofu +1 yr raw denim. Butcher shoreditch cloud bread, same sus trust fund chartreuse skateboard portland af.'
  },
  {
    image:`${imageSrc}/piece_6.jpeg`,
    title: 'Painting Six',
    description: 'PBR&B bitters direct trade XOXO put a bird on it raclette meggings tofu +1 yr raw denim. Butcher shoreditch cloud bread, same sus trust fund chartreuse skateboard portland af.'
  },
  {
    image:`${imageSrc}/piece_7.jpeg`,
    title: 'Painting Seven',
    description: 'PBR&B bitters direct trade XOXO put a bird on it raclette meggings tofu +1 yr raw denim. Butcher shoreditch cloud bread, same sus trust fund chartreuse skateboard portland af.'
  },
  {
    image:`${imageSrc}/piece_8.jpeg`,
    title: 'Painting Eight',
    description: 'PBR&B bitters direct trade XOXO put a bird on it raclette meggings tofu +1 yr raw denim. Butcher shoreditch cloud bread, same sus trust fund chartreuse skateboard portland af.'
  },
  {
    image:`${imageSrc}/piece_9.jpeg`,
    title: 'Painting Nine',
    description: 'PBR&B bitters direct trade XOXO put a bird on it raclette meggings tofu +1 yr raw denim. Butcher shoreditch cloud bread, same sus trust fund chartreuse skateboard portland af.'
  },
  {
    image:`${imageSrc}/piece_10.jpeg`,
    title: 'Painting Ten',
    description: 'PBR&B bitters direct trade XOXO put a bird on it raclette meggings tofu +1 yr raw denim. Butcher shoreditch cloud bread, same sus trust fund chartreuse skateboard portland af.'
  },
  {
    image:`${imageSrc}/piece_11.jpeg`,
    title: 'Painting Eleven',
    description: 'PBR&B bitters direct trade XOXO put a bird on it raclette meggings tofu +1 yr raw denim. Butcher shoreditch cloud bread, same sus trust fund chartreuse skateboard portland af.'
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <MasonryContainer>
          <>
            { posts. map((post, i) => <Brick title={post.title} image={post.image} key={i} /> ) }
          </>
        </MasonryContainer>
      </Container>
    </>
  )
}
