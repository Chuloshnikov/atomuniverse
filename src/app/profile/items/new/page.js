"use client"
import {useState, useEffect} from 'react';
import UserTabs from '@/components/profile/UserTabs';
import Link from 'next/link';
import { useProfile } from '@/components/UseProfile';
import { redirect } from 'next/navigation';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import EditableImage from '@/components/EditableImage';

export default function NewItemPage() {

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [scu, setScu] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [redirectToItems, setRedirectToItems] = useState(false);
    const {loading, data} = useProfile();


    async function handleFormSubmit() {

    }

    if (redirectToItems) {
        return redirect('/items');
    }

    if (loading) {
        return 'Loading user info...';
    }

    if (!data.admin) {
        return "Not an admin.";
    }

  return (
    <section className="mt-8">
        <UserTabs isAdmin={true}/>
        <div
        className='max-w-lg mx-auto mt-8'
        >
            <Link 
            className="shadow-button bg-accentBg hover:bg-smouthText px-4 py-2
            text-white rounded-md mr-4 flex gap-1 items-center max-w-max font-semibold"
            href={'/profile/items'}
            >
                <span>Show all items</span>
                <FaArrowAltCircleLeft className='w-5 h-5'/>
            </Link>
        </div>
        <form
        onSubmit={handleFormSubmit} 
        className='mt-8 max-w-xl mx-auto'
        >
            <div className='flex items-start gap-4'>
                <div>
                    <EditableImage link={image} setLink={setImage}/>
                </div>
                <div className='grow'>
                    <label>Item name</label>
                    <input 
                    onChange={e => setName(e.target.value)}
                    value={name}
                    type="text"
                    />
                    <label>Description</label>
                    <input 
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    type="text"
                    />
                    <label>Category</label>
                    <select onChange={e => setCategory(e.target.value)}>
                        <option value={"voucher"}>voucher</option>
                        <option value={"nft"}></option>
                    </select>
                    <label>Base Price</label>
                    <input
                    onChange={e => setBasePrice(e.target.value)}
                    value={Price}
                    type="text"
                    />
                    <button type='submit'>Save</button>
                </div>
            </div>
        </form>
    </section>
  )
}
