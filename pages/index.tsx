import { collection, getDocs, query } from 'firebase/firestore';
import Brick from '../components/Brick';
import Container from '../components/Container';
import MasonryContainer from '../components/MasonryContainer';
import Navbar from '../components/Navbar';
import { H2 } from '../components/Title';
import { db } from '../firebase';
import Painting from '../interfaces/Painting';

interface HomeProps {
  paintings: Painting[];
}

export async function getServerSideProps(context: any) {
    const paintingsRef = collection(db, "paintings");
    const allPaintingsQuery = query(paintingsRef);
    const paintingsGet = await getDocs(allPaintingsQuery);

    let paintings: Painting[] | any = [];
    paintingsGet.forEach((doc) => {
      paintings.push({ uid: doc.id, ...doc.data() });
    });

    console.log(paintings)
    return {
      props: {
        paintings
      }, 
    }
}

export default function Home({paintings} : HomeProps) {
  return (
    <>
      <Navbar />
      <Container>
        <MasonryContainer>
          <>
            {paintings? paintings.map((post, i) =>(
              <Brick 
                title={post.title} 
                image={post.image} 
                route={post.path} 
                key={i} 
              />
            )) : <H2>There are no paintings. Please add some.</H2>}
          </>
        </MasonryContainer>
      </Container>
    </>
  )
}
