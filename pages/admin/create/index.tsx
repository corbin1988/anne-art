import { useState } from "react";
import AdminContainer from "../../../components/AdminContainer";
import PaintingPageForm from "../../../components/forms/PaintingPageForm";

const CreatePainting = () => {
  const [content, setContent] = useState({})

  const submit = (e: any, content: any) => {
    e.preventDefault();
    console.log(content)
    return ''
  }

  return (
    <AdminContainer>
      <PaintingPageForm
        submit={submit}
        content={setContent}
      />
    </AdminContainer>
  )
}

export default CreatePainting;