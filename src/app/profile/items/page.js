"use client"
import UserTabs from '@/components/profile/UserTabs'
import { useState, useEffect } from 'react';
import { useProfile } from '@/components/UseProfile';
import Link from 'next/link';
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from 'next/image';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function Items() {

  const [items, setItems] = useState([]);
  const {loading, data} = useProfile();
  console.log(items);

  useEffect(() => {
      fetch('/api/items').then(res => {
          res.json().then(items => {
            setItems(items);
          })
      })
  }, [])

  if (loading) {
      return(
        <div className='flex items-center justify-center'>
            <LoadingSpinner/>
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
    <section
    className="mt-8 max-w-lg p-4 mx-auto"
    >
        <UserTabs/>
          <div
          className='mt-8'
          >
              <Link 
              className="shadow-button bg-accentBg hover:bg-smouthText px-4 py-2
              text-white rounded-md mr-4 flex gap-1 items-center max-w-max font-semibold"
              href={'/profile/items/new'}
              >
                  <span>Create new item</span>
                  <FaArrowAltCircleRight className='w-5 h-5'/>
              </Link>
          </div> 
          <div>
            <h2 className='text-sm text-gray-500 mt-8'>Edit item:</h2>
              <div className='grid grid-cols-3 gap-2'>
                  {items?.length > 0 && items.map(item => (
                      <Link 
                      key={item._id}
                      href={'/profile/items/edit/' + item._id}
                      className='bg-black text-white rounded-lg p-4'>
                          <div className='relative'>
                              <Image src={item.image} alt="item image" width={200} height={200}/>
                          </div>
                          <div className='text-center'>
                              {item.name}
                          </div>
                      </Link>
                  ))}
              </div> 
            </div>
    </section>
  )
}