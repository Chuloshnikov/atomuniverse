"use client"
import {useState, useEffect} from 'react';
import UserTabs from '@/components/profile/UserTabs';
import Link from 'next/link';
import { useProfile } from '@/components/UseProfile';
import { redirect } from 'next/navigation';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import EditableImage from '@/components/EditableImage';
import SavingInfo from '@/components/ui/SavingInfo';

export default function NewItemPage() {

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [contract, setContract] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [redirectToItems, setRedirectToItems] = useState(false);
    const {loading, data} = useProfile();

    {/*UI States*/}
    const [uploading, setUploading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [isError, setIsError] = useState(false);
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState(false);

    async function handleFormSubmit(e) {
      e.preventDefault();
      const data = {image, name, contract, category, price};
        const response = await fetch('/api/items', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            setIsSaving(false);
            setSaved(true);
            setRedirectToItems(true);
        } else {
            setIsSaving(false);
            setError(true);
        }

    }

    if (redirectToItems) {
        return redirect('profile/items');
    }

    if (loading) {
        return (
            <div className='flex text-center w-screen h-screen(-20%)'>
                Loading user info.
            </div>
        );
    }

    if (!data.admin) {
        return (
            <div className='flex text-center w-screen h-screen(-20%)'>
                Not an admin.
            </div>
        );
    }

  return (
    <section className="mt-12">
        <UserTabs isAdmin={true}/>
        <div
        className='max-w-lg mx-auto mt-8'
        >
          
            <Link 
            className="shadow-button bg-accentBg hover:bg-smouthText px-4 py-2
            text-white rounded-md ml-6 mdl:ml-4 flex gap-1 items-center max-w-max font-semibold"
            href={'/profile/items'}
            >
                <span>Show all items</span>
                <FaArrowAltCircleLeft className='w-5 h-5'/>
            </Link>
        </div>
        <div className='mx-auto max-w-[300px] mt-8'>
            <EditableImage link={image} setError={setError} setLink={setImage} setUploading={setUploading}/>
        </div>
        <form
        onSubmit={handleFormSubmit} 
        className='mt-4 max-w-xl mx-auto'
        >
            <div className='flex flex-col items-center gap-4'>
                <div className='grow mx-4'>
                    <label>Item name</label>
                    <input 
                    onChange={e => setName(e.target.value)}
                    value={name}
                    type="text"
                    />
                    <label>Contract name</label>
                    <input 
                    onChange={e => setContract(e.target.value)}
                    value={contract}
                    type="text"
                    />
                    <label>Category</label>
                    <select onChange={e => setCategory(e.target.value)}>
                        <option value={"voucher"}>voucher</option>
                        <option value={"nft"}>nft</option>
                    </select>
                    <label>Price</label>
                    <input
                    onChange={e => setPrice(e.target.value)}
                    value={price}
                    type="text"
                    />
                    <button 
                    className="mt-4 shadow-button bg-accentBg hover:bg-smouthText 
                    px-4 py-2 text-white rounded-md mr-4 
                    font-semibold text-white w-full"
                    type='submit'
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
            {uploading && (<SavingInfo text={"Uploading..."}/>)}
            {isSaving && (<SavingInfo text={"Saving..."}/>)}
            {saved && (<SavingInfo text={"Saved..."}/>)}
            {error && (<SavingInfo text={"Error..."}/>)}
    </section>
  )
}
