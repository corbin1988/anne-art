import { collection, query, getDocs, orderBy } from "firebase/firestore";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import { H3, H4 } from "../../components/Title";
import { db } from "../../firebase";
import About from "../../interfaces/About";

export async function getServerSideProps(context: any) {
  const aboutsRef = collection(db, "about");
  const allAboutQuery = query(aboutsRef, orderBy('year', 'desc'));
  const aboutGet = await getDocs(allAboutQuery);

  let about: About[] | any = [];
  aboutGet.forEach((doc) => {
    about.push({ uid: doc.id, ...doc.data() });
  });
  const description = "A description of Anne"
  console.log(about)
  return {
    props: {
      about,
      description
    }, 
  }
}

const About = ({about, description} : any) => {
  return(
   <>
    <Navbar />
    <Container>
      <div className="p-8">
        <div className="mb-4">
          <H3>Description</H3>
          <div dangerouslySetInnerHTML={{ __html: about.description}}></div>
        </div>
        <div>
          <H3 className="mb-4">Timeline</H3>
          { about.map((date: About, i: number) => 
            <div className="mb-4" key={i}>
              <H4>{date.year}</H4>
              <div dangerouslySetInnerHTML={{ __html: date.content}}></div>
            </div>
          ) }
        </div>
      </div>
    </Container>
   </>
  )
}

export default About;