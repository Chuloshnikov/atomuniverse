"use client"
import Link from 'next/link';

const UserInfo = ({ user }) => {

    console.log(user);
  return (
    <div className='my-2 flex flex-col mdl:flex-row gap-2 border border-#A7A5AD p-2 rounded-md justify-between'>
        <div className='flex gap-1'>
            <span className='flex gap-1'>
              {!!user.name && (<span>{user.name}</span>)}
              {!user.name && (<span>No name</span>)}
            </span>
        </div> 
        <div>
          {user?.email}
        </div>
        <div>
          <Link 
             className="shadow-button bg-accentBg hover:bg-smouthText px-4 py-2
            text-white rounded-md ml-6 mdl:ml-4 flex gap-1 items-center max-w-max font-semibold"
            href={'profile/users/' + user._id}>
                Edit
          </Link>
        </div>
    </div>
  )
}

export default UserInfo;