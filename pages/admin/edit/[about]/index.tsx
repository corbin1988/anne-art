import AdminContainer from "../../../../components/AdminContainer";
import { useState } from "react";
import CreateAboutForm from "../../../../components/forms/CreateAboutForm";



const EditAbout = ( ) => {
  const [content, setContent] = useState({})

  const submit = (e: any, content: any) => {
    e.preventDefault();
    console.log(content)
    return ''
  }

  return (
    <AdminContainer>
      <CreateAboutForm 
        submit={submit}
        content={setContent}
        title='Hello world'
        html='wooo'
      />
    </AdminContainer>
  )
}

export default EditAbout;