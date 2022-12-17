/* eslint-disable @next/next/no-img-element */
import { collection, getDocs, query, where } from "firebase/firestore";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import { H2 } from "../../components/Title";
import { db } from "../../firebase";
import Painting from "../../interfaces/Painting";

interface PieceProps {
  painting: Painting;
}
export async function getServerSideProps(context: any) {

  const paintingsRef = collection(db, "paintings");

// Create a query against the collection.
  const q = query(paintingsRef, where("path", "==", context.params.piece));

  let painting;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
     painting =  { uid: doc.id, ...doc.data() }
  });
  console.log(painting)
  return {
    props: {
      painting
    }, 
  }
}

export default function Piece({painting} : PieceProps) {
  return (
    <>
      <Navbar />
      <Container>
        <div className="flex flex-col md:flex-row p-8">
          <div className="w-full md:w-2/4 p-8">
            <img className="" src={painting.image} alt={painting.title}/>
          </div>
          <div className="flex flex-col justify-between w-full md:w-2/4 p-8 h-60">
            <H2>{painting.title}</H2>
            <div className="flex w-full">
              <div className="flex flex-col justify-between h-24">
                <div className="flex align-middle">
                  <span className="font-semibold mr-2">Year: </span> <span>{painting.year}</span>
                </div>
                <div className="flex align-middle">
                  <span className="font-semibold mr-2">Medium: </span> <span>{painting.medium}</span>
                </div>
                <div className="flex align-middle">
                  <span className="font-semibold mr-2">Size: </span><span>{ painting.width }cm { painting.height}cm </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
