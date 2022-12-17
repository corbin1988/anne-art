import AdminContainer from "../../../../components/AdminContainer";
import { useState } from "react";
import CreateAboutForm from "../../../../components/forms/CreateAboutForm";
import withProtected from "../../../../hooks/router";
import toPath from "../../../../utils/toPath";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebase";
import Router from "next/router";
import { H2 } from "../../../../components/Title";

const CreateAbout = ( ) => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(false);

  const submit = async (e: any, content: any) => {
  e.preventDefault();
  setLoading(true);

   try {
    await addDoc(collection(db, 'about'), {
      year: content.year,
      path: toPath(content.year),
      content: content.content
    });
    setLoading(false)
   } catch(error) {
    console.log(error)
    setLoading(false)
   } 
    return Router.push('/admin/');
  }

  return (
    <AdminContainer>
      { loading? 
        <div className="flex justify-center align-middle">
          <H2 className='text-center'>Submitting...</H2>
        </div>
      : <CreateAboutForm 
        submit={submit}
        content={setContent}
      />
      }
    </AdminContainer>
  )
}

export default withProtected(CreateAbout);