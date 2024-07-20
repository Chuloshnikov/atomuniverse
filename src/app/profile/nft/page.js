import UserTabs from '@/components/profile/UserTabs';
import React from 'react';
import MyNftPage from '@/components/mynft/MyNftPage';

export default function MyNfts() {
  return (
    <section
    className="mt-12 p-4"
    >
        <UserTabs/>
            <MyNftPage/>
    </section>
  )
}
