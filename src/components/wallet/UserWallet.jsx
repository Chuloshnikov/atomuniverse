import {useState, useEffect} from 'react'
import { useProfile } from '../UseProfile';

const UserWallet = () => {

    const {data} = useProfile();
    const [wallet, setWallet] = useState();

    useEffect(() => {
        
    }, [])


  return (
    <div className="py-12 text-center">
        UserWallet
    </div>
  )
}

export default UserWallet;