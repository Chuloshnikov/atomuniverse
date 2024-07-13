"use client"
import {useState, useEffect} from 'react';
import UserTabs from '@/components/profile/UserTabs';
import { useProfile } from '@/components/UseProfile';
import EditableImage from '@/components/EditableImage';
import { redirect, useParams } from 'next/navigation';
import { orange } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import Link from 'next/link';
import SavingInfo from '@/components/ui/SavingInfo';


export default function EditUserPage() {
        const {id} = useParams();

        const [userName, setUserName] = useState('');
        const [email, setEmail] = useState('');
        const [image, setImage] = useState('');
        const [admin, setAdmin] = useState(false);

        const [redirectToUsers, setRedirectToUsers] = useState(false);
        const {loading, data} = useProfile();
        const {data: loggedInUserData} = useProfile();
         
        {/*UI States*/}
        const [uploading, setUploading] = useState(false);
        const [isSaving, setIsSaving] = useState(false);
        const [isError, setIsError] = useState(false);
        const [saved, setSaved] = useState(false);
        const [error, setError] = useState(false);


        useEffect(() => {
            fetch('/api/users').then(response => {
                response.json().then(data => {
                    const user = data.find(users => users._id === id);
                    setUserName(user.name);
                    setEmail(user.email);
                    setImage(user.image);
                    setAdmin(user.admin);
                });
            });
    }, [id]);

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

    const handleUserInfoUpdate = async (e) => {
        e.preventDefault();
            const data = {
                _id: id,
                name: userName,
                email,
                image,
                admin
            };
            const response = await fetch('/api/users', {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data),
            });
            if (response.ok) {
                setIsSaving(false);
                setSaved(true);
                setRedirectToUsers(true);
            } else {
                setIsSaving(false);
                setError(true);
            }
        };

    if (redirectToUsers) {
        return redirect('/profile/users');
    }

    if (loading) {
        return "loading user profile...";
    }

    if (!data.admin) {
        return "Not an admin";
    }

    return (
        <section className="mt-12 p-4">
                <UserTabs/>
                <div className="max-w-md mx-auto">
                    <div className="flex gap-2">
                       <EditableImage link={image} setLink={setImage} setUploading={setUploading} setIsError={setIsError}/>
                        <form 
                        className="grow"
                        onSubmit={handleUserInfoUpdate}
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
                            value={email}
                            />
                              {loggedInUserData.admin && (
                                <div className='mt-4'>
                                <label className='p-2 flex items-center gap-1 border-2 text-mainText rounded-md border-accentBg bg-mainBg mb-2' htmlFor='adminCheckbox'>
                                    <Checkbox
                                    onChange={e => setAdmin(e.target.checked)}
                                    checked={admin} 
                                    sx={{
                                        color: orange[800],
                                        '&.Mui-checked': {
                                        color: orange[800],
                                        },
                                    }}
                                    />
                                    <span className='text-base text-smouthText'>Admin</span>
                                </label>
                            </div>
                            )}
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
