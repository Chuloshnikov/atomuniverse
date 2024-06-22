import { useState, useEffect } from 'react';
import { useProfile } from '../UseProfile';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TbCopy, TbCopyCheckFilled } from "react-icons/tb";
import { shortenString } from '@/libs/shorterString';
import LoadingSpinner from '../ui/LoadingSpinner';

const UserWallet = () => {
  const { data } = useProfile();
  const [wallet, setWallet] = useState(null);
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

  if (loading) {
    return (<LoadingSpinner />);
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="py-6 text-center">
      <div className=''>
        <h2 className='text-lg'>{data.name}</h2>
        {wallet && (
        <div className='flex gap-1 items-center justify-center'>
            <span className='text-sm text-accentBg'>{shortenString(wallet.address)}</span>
            <CopyToClipboard text={wallet.address} onCopy={() => setCopied(true)}>
                <button><TbCopy/></button>
            </CopyToClipboard>
        </div>
        )}
      </div>
      <div className='h-4 w-full'>
      {copied ? <span className='text-green-600 text-xs'>Address copied!</span> : null}
      </div>
      <div className='mt-4'>
        <form>
            <input type='text' placeholder='type the address...'/>
            <button 
            type='button'
            >
                    Send
            </button>
        </form>
      </div>
    </div>
  );
};

export default UserWallet;