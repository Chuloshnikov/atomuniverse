import Image from "next/image";
import { BsFillImageFill } from "react-icons/bs";


const EditableImage = ({link, setLink, setUploading, setError}) => {

    const handleFileChange = async (e) => {
        const files = e.target.files;
        if (files?.length === 1) {
            const data = new FormData();
            data.set('file', files[0]);
            setUploading(true);
            const response = await fetch('api/upload', {
                method: 'POST',
                body: data,
            })

            const link = await response.json();
            if (link) {
                setLink(link);
                setUploading(false);
            } else {
                setUploading(false);
                setError(true);
            }
            
        }
    }


  return (
    <>
         <div className="bg-mainText p-2 rounded-lg flex flex-col justify-between">
            {link ? (
                <div className="w-[100px] h-[100px]">
                    <Image 
                    className="rounded-lg" 
                    src={link} 
                    width={100} 
                    height={100} 
                    alt="avatar"
                    />
                </div>
                ) : (
                <div className="w-[100px] h-[100px]">
                    <BsFillImageFill className="text-black w-[100px] h-[100px] mx-auto"/>
                </div>
                )}
                <label>
                    <input type="file" className="hidden" onChange={handleFileChange}/>
                    <span className="block border-2 border-black rounded-lg p-[4px] text-black font-semibold text-center cursor-pointer mt-2">Edit</span>
                </label>
        </div>
    </>
  )
}

export default EditableImage;