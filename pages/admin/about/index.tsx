import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { ref } from "firebase/storage";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import AdminContainer from "../../../components/AdminContainer";
import AdminTable, { TD, TDLink, TH, THEAD, TR } from "../../../components/AdminTable";
import Button from "../../../components/Button";
import { H2, H4 } from "../../../components/Title";
import { db, storage } from "../../../firebase";
import withProtected from "../../../hooks/router";
import About from "../../../interfaces/About";

const AdminAboutList = () => {
  const [loaded, setLoaded] = useState(false);
  const [about, setAbout] = useState([])

  const getAllAbout= async () => {
    const aboutRef = collection(db, "about");
    const allAboutQuery = query(aboutRef);
    const allAboutGet = await getDocs(allAboutQuery);

    let allAbout: About[] | any = [];
    allAboutGet.forEach((doc) => {
      allAbout.push({ uid: doc.id, ...doc.data() });
    });
    setAbout(allAbout);
  };
  
  useEffect(() => {
    getAllAbout();
    setLoaded(true);
  }, [loaded]);

  const deleteAbout = async (aboutPost: About) => {

    await deleteDoc(doc(db, "about", aboutPost.uid)).then(() => {
      const newAbout = about.filter((oldAbout: About) => oldAbout.uid !== aboutPost.uid);
      setAbout(newAbout);
    });
  }

  return (
    <AdminContainer>
      <>
        <div className="flex w-full justify-between py-2 text-black text-center min-w-full sm:px-6 lg:px-8">
        <H2 className="m-0">About</H2>
        <Button>
          <Link  href='/admin/about/create'>
            Create Year
          </Link>
        </Button>
        </div>
        <AdminTable>
          {/* Hydration error conditional that waits for page to render */}
          { loaded ? 
            <THEAD>
              <TH title='Year'/>
              <TH title=""/>
            </THEAD> : <></>
          }
          <tbody>
            {about.length > 0 ? about.map((post: About, i: number) => (
                <TR key={i}>
                  <TDLink href={`/admin/about/edit/${post.path}`}>{post.year}</TDLink>
                  <TD>
                    <Button className="mr-2" onClick={() =>  Router.push(`/admin/about/edit/${post.path}`)}>Update</Button>
                    <Button onClick={() => deleteAbout(post)}>Delete</Button>
                  </TD>
                </TR>
              )) : <TR>
                <TD>
                  <H4>There are no about posts</H4>
                </TD>
                <TD><></></TD>
              </TR>
            }
          </tbody>
        </AdminTable>
      </>
    </AdminContainer>
  )
}

export default withProtected(AdminAboutList);