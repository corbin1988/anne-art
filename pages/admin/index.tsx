import Link from "next/link";
import { useEffect, useState } from "react";
import AdminContainer from "../../components/AdminContainer";
import AdminTable, { TD, TDLink, TH, THEAD, TR } from "../../components/AdminTable";
import Button from "../../components/Button";
import { H2, H3, H4 } from "../../components/Title";
import { withProtected } from "../../hooks/router";
import { collection, deleteDoc, doc, getDocs, query, setDoc } from "firebase/firestore";
import { db, storage } from '../../firebase';
import { deleteObject, ref } from "firebase/storage";

interface Painting {
  uid: string;
  title: string;
  year: number | string;
  medium: string;
  height: string | number;
  width: string | number;
  image: string;
}

const Admin = () => {
  const [loaded, setLoaded] = useState(false)
  const [paintings, setPaintings] = useState([]);

  const getPainitings = async () => {
    const paintingsRef = collection(db, "paintings");
    const allPintingsQuery = query(paintingsRef);
     const allPaintingsGet = await getDocs(allPintingsQuery);
     //Create paintings interface
     let allPaintings: Painting[] | any = [];
     allPaintingsGet.forEach((doc) => {
       allPaintings.push({uid: doc.id, ...doc.data()});
    });
    setPaintings(allPaintings);
  }

  useEffect(() => {
    getPainitings();
    setLoaded(true);
  }, [loaded]);

  useEffect(() => {
    
  }, [paintings])
  

  const deletePainting = async (painting: Painting) => {

    const paintingImageRef = ref(storage, painting.image);

    const paintingRef = await deleteDoc(doc(db, "paintings", painting.uid)).then(()=>{
      deleteObject(paintingImageRef).then(()=> {
        const newPaintings = paintings.filter((oldPainting: Painting) => oldPainting.uid !== painting.uid);
        setPaintings(newPaintings);
      });
    });
  }
  
  return (
    <AdminContainer>
      <>
        <div className="flex w-full justify-between py-2 text-black text-center min-w-full sm:px-6 lg:px-8">
        <H2 className="m-0">Art</H2>
        <Button>
          <Link  href='admin/create'>Post Painting</Link>
        </Button>
        </div>
        <AdminTable>
          {/* Hydration error conditional that waits for page to render */}
          { loaded ? 
            <THEAD>
              <TH title='Painting title'/>
              <TH title=""/>
            </THEAD> : <></>
          }
          <tbody>
          { paintings.length > 0? paintings.map((painting: Painting, i: number) => (
            <TR key={i}>
              <TDLink href="admin/edit/painting-one">{painting.title}</TDLink>
              <TD>
                <Button className="mr-2">Update</Button>
                <Button onClick={() => deletePainting(painting)}>Delete</Button>
              </TD>
            </TR>
            )) :<TR >
              <TD>
                <H4>There are no paintings</H4>
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

export default withProtected(Admin);