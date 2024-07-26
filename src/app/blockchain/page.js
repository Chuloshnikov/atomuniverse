"use client"
import {useState, useEffect} from "react";
import BlockchainPage from "@/components/blockchain/BlockchainPage";
import UserTabs from "@/components/profile/UserTabs";

export default function Blockchain() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('/api/blockchain').then(res => {
      res.json().then(items => {
        setTransactions(items);
      })
  })
  }, [])

  return (
    <div section className="mt-12 p-4">
        <UserTabs/>
        <div
        className='max-w-xl mx-auto mt-8'
        >
          {transactions && transactions.map(items => (
            <div>
              <BlockchainPage key={items._id} items={items}/>
            </div>
          ))}
        </div>
    </div>
  )
}
