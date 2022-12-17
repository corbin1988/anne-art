import { useEffect, useState } from "react";
import AdminContainer from "../../../../components/AdminContainer";
import PaintingPageForm from "../../../../components/forms/PaintingPageForm";
import withProtected from "../../../../hooks/router";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../../../firebase";
import toPath from "../../../../utils/toPath";
import { H4 } from "../../../../components/Title";
import Router from "next/router";


export async function getServerSideProps(context: any) {
  console.log(context.params.piece)

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

const EditPainting = (props: any) => {
  const [title, setTitle] = useState(props.painting.title? props.painting.title : '');
  const [date, setDate] = useState(props.painting.year? props.painting.year : '');
  const [medium, setMedium] = useState(props.painting.medium? props.painting.medium : '');
  const [height, setHeight] = useState(props.painting.height? props.painting.height : '');
  const [width, setWidth] = useState(props.painting.width? props.painting.width : '');
  const [image, setImage] = useState(props.painting.image? props.painting.image : null)
  const [content, setContent] = useState({})
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(props)
  }, [props])
  
  const submit = async (e: any, content: any) => {
    e.preventDefault();
    setLoading(true)
    const paintingRef = doc(db, "paintings", props.painting.uid);

    await updateDoc(paintingRef, {
      ...content,
      path: toPath(content.title)
    });
    setLoading(false);
    Router.push('/admin/')
    
  }

  return (
    <AdminContainer>
      <>
      <div className="px-8 pb-8">
        <H4 className="text-center">Please do not update painting image. Only text asscociated with painting.</H4>
      </div>
        {
          loading ? <H4>Submitting...</H4> :
          <PaintingPageForm
            submit={submit}
            content={setContent}
            title={title}
            date={date}
            medium={medium}
            height={height}
            width={width}
            selectedImage={image}
        />
        }
      </>
    </AdminContainer>
  )
}

export default withProtected(EditPainting);