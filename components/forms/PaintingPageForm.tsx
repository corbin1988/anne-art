/* eslint-disable @next/next/no-img-element */
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import Button from "../Button";
import Input from "./Input";

interface PaintingPageFormProps {
  submit: (e: any, content: any) => any;
  title?: string;
  content: any;
  date?: number;
  medium?: string;
  height?: number;
  width?: number;
  image?: string;
}

const fileTypes = ["JPG", "PNG", "GIF"];

const PaintingPageForm = (props: PaintingPageFormProps) => {
  const [title, setTitle] = useState(props.title? props.title : '');
  const [date, setDate] = useState(props.date? props.date : '');
  const [medium, setMedium] = useState(props.medium? props.medium : '');
  const [height, setHeight] = useState(props.height? props.height : '');
  const [width, setWidth] = useState(props.width? props.width : '');
  const [image, setImage] = useState(props.image? props.image : null)
  const [selectedImage, setSelectedImage] = useState(null);

  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      setImage(null);
    }
  };
  let painting = {
    title,
    year: date,
    medium,
    height,
    width,
    image: selectedImage,
  }

  const removeSelectedImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className='px-8 text-gray-900'>
      <form onSubmit={(e) => props.submit(e, painting)}>
        <div className="mb-4">
          <Input 
            onChange={(e) => setTitle(e.target.value)} 
            type="text" placeholder="Title of the painting" 
            label="title" 
            value={title}
          />
        </div>
        <div>
          <input
            accept="image/*"
            type="file"
            onChange={imageChange}
          />

          {selectedImage && image === null && (
            <div>
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Thumb"
              />
              <button onClick={removeSelectedImage}>
                Remove This Image
              </button>
            </div>
          )}

          {selectedImage === null && image && (
            <div>
              <img
                src={image}
                alt="Thumb"
              />
              <button onClick={removeSelectedImage}>
                Remove This Image
              </button>
            </div>
          )}
        </div>
        <div className="mb-4">
          <Input 
            onChange={(e) => setDate(e.target.value)} 
            type="text" 
            placeholder="What year? (1995, etc)" 
            label="Year" 
            value={date}
          />
        </div>
        <div className="mb-4">
          <Input 
            onChange={(e) => setMedium(e.target.value)} 
            type="text" 
            placeholder="What did you use to make this painting? (canvas, paper, etc)" 
            label="Medium" 
            value={medium}
          />
        </div>
        <div className="flex">
          <div className="w-2/4 pr-2">
            <Input 
              onChange={(e) => setWidth(e.target.value)} 
              type="text" 
              placeholder="Width of painting in cm" 
              label="Width" 
              value={width}
            />
          </div>
          <div className="w-2/4 pl-2">
            <Input 
              onChange={(e) => setHeight(e.target.value)} 
              type="text" 
              placeholder="Height of painting in cm" 
              label="Height" 
              value={height}
            />
          </div>
        </div>
        <div className='w-full mt-4 flex justify-end'>
          <Button className=''>Create</Button>
        </div>
      </form>
    </div>
  )
}

export default PaintingPageForm;