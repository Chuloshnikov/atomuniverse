import { useState, useEffect } from 'react';
import { useProfile } from '../UseProfile';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TbCopy } from "react-icons/tb";
import { shortenString } from '@/libs/shorterString';
import LoadingSpinner from '../ui/LoadingSpinner';
import WalletAmount from './WalletAmount';

const UserWallet = () => {
  const { data } = useProfile();
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [founds, setFounds] = useState("");
  const [address, setAddress] = useState("");
  const [currency, setCurrency] = useState("at");

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


  async function sendFounds() {
      e.preventDefault();
      const response = await fetch('/api/wallet', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            address,
            currency,
            founds
          }),
    });
    if (response.ok) {
            
    } else {
        
    }
  }

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
        <form
        onSubmit={sendFounds}
        className='flex flex-col gap-2'
        >
            <input 
            onChange={e => setAddress(e.target.value)} 
            type='text' 
            placeholder='type the address...'
            />
            <input 
            onChange={e => setFounds(e.target.value)} 
            className='no-arrows' 
            type='number' 
            placeholder='0.00'  
            min="0.0000000001"
            step="any"
            />
            <select 
            onChange={e => setCurrency(e.target.value)}
            name="select" 
            defaultValue={"at"}
            >
                <option value="at">Atomic Token</option>
                <option value="ac" selected>Atomcoin</option>
            </select>
            {currency}
            <button 
            className="mt-4 shadow-button bg-accentBg hover:bg-smouthText 
            px-4 py-2 text-white rounded-md mr-4 
            font-semibold text-white w-full"
             type='submit'
            >
                    Send
            </button>
        </form>
      </div>
      <div className='mt-4'>
        <WalletAmount wallet={wallet}/>
      </div>
    </div>
  );
};

export default UserWallet;