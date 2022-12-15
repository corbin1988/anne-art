import { useState } from "react";
import AdminContainer from "../../../components/AdminContainer";
import PaintingPageForm from "../../../components/forms/PaintingPageForm";
import withProtected from "../../../hooks/router";
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { db, storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import  Router  from "next/router";
import { H2 } from "../../../components/Title";

const CreatePainting = () => {
  const [content, setContent] = useState({})
  const [err, setErr] = useState(false);
  const [loading, setloading] = useState(false)

  const submit = async (e: any, content: any) => {
    e.preventDefault();
    setloading(true);
    
    const date = new Date().getTime();
    const storageRef = ref(storage, `${date + content.image.name}`);

    try {
      await uploadBytesResumable(storageRef, content.image).then(async () => {
        await getDownloadURL(storageRef).then( async (downloadURL) => {
          const docRef = await addDoc(collection(db, 'paintings'), {
            title: content.title,
            year: content.year,
            medium: content.medium,
            height: content.height,
            width: content.width,
            image: downloadURL,
          });
          console.log("Document written with ID: ", docRef.id);
          return Router.push('/admin/');
        });
      });
    } catch (error) {
      setloading(false);
      return error;
    }
    setloading(false);
  }

  return (
    <AdminContainer>
      <>
        { loading? 
          <div className="flex justify-center align-middle">
            <H2 className='text-center'>Submitting...</H2>
          </div> : 
          <PaintingPageForm
            submit={submit}
            content={setContent}
          /> 
        }
      </>
    </AdminContainer>
  )
}

export default withProtected(CreatePainting);