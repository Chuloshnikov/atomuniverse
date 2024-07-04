"use client"
import UserTabs from '@/components/profile/UserTabs'
import { useState, useEffect } from 'react';
import { useProfile } from '@/components/UseProfile';
import Link from 'next/link';
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from 'next/image';

export default function Items() {

  const [menuItems, setMenuItems] = useState([]);
  const {loading, data} = useProfile();

  useEffect(() => {
      fetch('api/items').then(res => {
          res.json().then(menuItems => {
              setMenuItems(menuItems);
          })
      })
  }, [])

  if (loading) {
      return 'Loading user info...';
  }

  if (!data.admin) {
      return 'Not an admin.';
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
            <h2 className='text-sm text-gray-500 mt-8'>Edit menu item:</h2>
              <div className='grid grid-cols-3 gap-2'>
                  {menuItems?.length > 0 && menuItems.map(item => (
                      <Link 
                      key={item._id}
                      href={'/profile/items/edit/' + item._id}
                      className='bg-gray-200 rounded-lg p-4'>
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