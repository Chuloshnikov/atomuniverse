"use client"
import {useState, useEffect} from "react";
import { useSession } from "next-auth/react";
import {redirect} from "next/navigation";
import UserTabs from "../../components/profile/UserTabs";
import EditableImage from "@/components/EditableImage";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import SavingInfo from "@/components/ui/SavingInfo";

export default function ProfilePage() {

    const session = useSession();

    const [userName, setUserName] = useState('');
    const [image, setImage] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [profileFetched, setProfileFetched] = useState(false);
    const {status} = session;
        
    
    {/*UI States*/}
    const [uploading, setUploading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [isError, setIsError] = useState(false);
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (status === 'authenticated') {
            setUserName(session.data.user.name);
            setImage(session.data.user.image);
            fetch('/api/profile').then(response => {
                response.json().then(data => {
                    setUserName(data.name);
                    setImage(data.image);
                    setIsAdmin(data.admin)
                })
            })
        }

    }, [session, status]);

    
useEffect(() => {
    if (saved) {
        setTimeout(() => {
            setSaved(false);
        }, 2000);
    } else if (error) {
        setTimeout(() => {
            setError(false);
        }, 2000);
    }
}, [saved, isError]);



    const handleProfileInfoUpdate = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        const response = await fetch('/api/profile', {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name: userName, 
                image,
            })
        });
        if (response.ok) {
            setIsSaving(false);
            setSaved(true);
        } else {
            setIsSaving(false);
            setError(true);
        }
    }


    if (status === 'loading') {
    return (
        <div className='flex items-center justify-center'>
            <LoadingSpinner/>
        </div>
        );
    };

    if (status === 'unauthenticated') {
    return redirect('/login');
    };

    


    return (
        <section className="mt-12 p-4">
              <UserTabs/>
            <div className="max-w-md mx-auto">
                    <div className="flex gap-2">
                       <EditableImage link={image} setLink={setImage} setUploading={setUploading} setIsError={setIsError}/>
                        <form 
                        className="grow"
                        onSubmit={handleProfileInfoUpdate}
                        >
                        <label>Username:</label>
                        <input 
                            onChange={e => setUserName(e.target.value)}
                            className="w-full bg-mainBg border-2 border-accentBg text-smouthText rounded-md focus:border-smouthText dark:focus:ring-smouthText focus:ring-1 focus:outline-none focus:ring-smouthText"
                            type="text" 
                            placeholder="User name" 
                            value={userName} 
                            />
                            <label>Email:</label>
                            <input
                            className="w-full bg-mainBg border-2 border-accentBg text-smouthText rounded-md focus:border-smouthText dark:focus:ring-smouthText focus:ring-1 focus:outline-none focus:ring-smouthText" 
                            type="email" 
                            disabled={true} 
                            value={session.data.user.email}
                            />
                            <button
                            className="mt-4 shadow-button bg-accentBg hover:bg-smouthText 
                            px-4 py-2 text-white rounded-md mr-4 
                            font-semibold text-white w-full"
                            type="submit"
                            >
                                Save
                            </button>
                        </form>
                    </div>
            </div>
            {uploading && (<SavingInfo text={"Uploading..."}/>)}
            {isSaving && (<SavingInfo text={"Saving..."}/>)}
            {saved && (<SavingInfo text={"Saved..."}/>)}
            {error && (<SavingInfo text={"Error..."}/>)}
        </section>
    )
}