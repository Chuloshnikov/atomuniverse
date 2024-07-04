import Image from "next/image";
import toast from "react-hot-toast";
import userImg from "../../../public/images/userImg.png";

const EditableImage = ({link, setLink}) => {

    const handleFileChange = async (e) => {
        const files = e?.target.files; 
        if (files?.length === 1) {
            const data = new FormData;
            data.set('file', files[0]);
            

            
            const uploadPromise = fetch('/api/upload', {
                    method: 'POST',
                    body: data
                }).then(response => {
                    if (response.ok) {
                    return response.json().then(link => {
                            setLink(link);
                        })
                    } 
                    throw new Error('Some thing went wrong')
            });
            
            await toast.promise(uploadPromise, {
                loading: 'Uploading...',
                success: 'Upload complete',
                error: 'Upload error',
            })
        }   
    }

    return (
        <>
            <div
            className="w-[100px] h-[100px] mt-2"
            >
                {link?.length ? (
                    <Image className="rounded-lg w-full h-full mb-1" src={link} width={250} height={250}  alt={'image'} />
                ) : (
                    <div
                    className="w-full h-full flex justify-center items-center bg-gray-200 rounded-xl text-gray-500"
                    >
                        <span>No image</span>
                    </div> 
                )}
            </div>
            <label>
                <input type="file" className="hidden" onChange={handleFileChange}/>
                <span className="block border border-gray-300 rounded-lg p-[4px] text-center cursor-pointer mt-2">Edit</span>
            </label>
        </>
    )
}

export default EditableImage;