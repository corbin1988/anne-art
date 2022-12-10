import { DefaultEditor } from 'react-simple-wysiwyg';
import { useState } from "react";
import { H5 } from "../Title";
import Input from "./Input";
import Button from "../Button";

interface CreateAboutFormProps {
  submit: (e: any, content: any) => any;
  content: any;
  html?: string;
  title?: string;
}

const CreateAboutForm = (props: CreateAboutFormProps) => {

  const [html, setHtml] = useState(props.html? props.html : 'my <b>HTML</b>');
  const [title, setTitle] = useState(props.title? props.title : 'my <b>HTML</b>');

  const onChangeHTML = (e: any) => {
    setHtml(e.target.value);
  }


  return (
    <div className='px-8'>
      <form onSubmit={(e) => props.submit(e, {title: title, ccontent: html})}>
        <div className="mb-4">
          <Input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="What year? (1995, etc)" label="Year" value={props.title}/>
        </div>
        <div className="mb-4">
          <H5>What Happened this year?</H5>
        </div>
        <DefaultEditor  value={html} onChange={onChangeHTML} />
        <div className='w-full mt-4 flex justify-end'>
          <Button className=''>Create</Button>
        </div>
      </form>
    </div>
  )
}

export default CreateAboutForm;