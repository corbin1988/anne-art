import { useState } from "react";
import AdminContainer from "../../../../components/AdminContainer";
import PaintingPageForm from "../../../../components/forms/PaintingPageForm";

const EditPainting = () => {
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
        title="Painting One"
        date={1988}
        medium='Canvas'
        height={120}
        width={120}
        image='/art/piece_1.jpeg'
      />
    </AdminContainer>
  )
}

export default EditPainting;