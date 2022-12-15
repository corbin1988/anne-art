import AdminContainer from "../../../../components/AdminContainer";
import { useState } from "react";
import CreateAboutForm from "../../../../components/forms/CreateAboutForm";
import withProtected from "../../../../hooks/router";

const CreateAbout = ( ) => {
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
      />
    </AdminContainer>
  )
}

export default withProtected(CreateAbout);