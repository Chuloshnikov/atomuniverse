import {useState, useEffect} from 'react';
import { useProfile } from '../UseProfile';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const UserWallet = () => {

    const {data} = useProfile();
    const [wallet, setWallet] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 
    const [copied, setCopied] = useState(false);
    
    console.log(wallet);

    useEffect(() => {
      const fetchWallet = async () => {
        setLoading(true);
        try {
          const response = await fetch('/api/wallet');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setWallet(data);
        } catch (error) {
          setError(error.message); 
        } finally {
          setLoading(false);
        }
      };
  
      fetchWallet();
    }, []);


  return (
    <div className="py-12 text-center">
        <div className='px-2'>
            <h2 className='text-lg'>{data.name}</h2>
            <span className='text-sm text-accentBg'>{wallet.address}</span>
            <CopyToClipboard text={wallet.address} onCopy={() => setCopied(true)}>
                <button>Копировать</button>
            </CopyToClipboard>
        </div>
    </div>
  )
}

export default UserWallet;