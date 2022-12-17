
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import Router from "next/router";
import { useState } from "react";
import AdminContainer from '../../../../../components/AdminContainer'
import CreateAboutForm from "../../../../../components/forms/CreateAboutForm";
import { db } from "../../../../../firebase";
import withProtected from "../../../../../hooks/router";
import About from "../../../../../interfaces/About";
import toPath from "../../../../../utils/toPath";

export async function getServerSideProps(context: any) {
  console.log(context.params.piece)

  const aboutRef = collection(db, "about");

// Create a query against the collection.
  const q = query(aboutRef, where("path", "==", context.params.about));

  let about;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
     about =  { uid: doc.id, ...doc.data() }
  });
  console.log(about)
  return {
    props: {
      about
    }, 
  }
}

const EditAbout = (props: any) => {
  const [year, setYear] = useState(props.about.year? props.about.year : '');
  const [html, setDate] = useState(props.about.content? props.about.content : '');
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(false);

  const submit = async (e: any, content: About) => {
    e.preventDefault();
    setLoading(true)
    const aboutRef = doc(db, "about", props.about.uid);

    await updateDoc(aboutRef, {
      ...content,
      path: toPath(content.year)
    });
    setLoading(false);
    Router.push('/admin/')
  }

  return (
    <AdminContainer>
      <CreateAboutForm 
        submit={submit}
        content={setContent}
        year={year}
        html={html}
      />
    </AdminContainer>
  )
}

export default withProtected(EditAbout);