import BlockchainPage from "@/components/blockchain/BlockchainPage";
import UserTabs from "@/components/profile/UserTabs";

export default function Blockchain() {
  return (
    <div section className="mt-12 p-4">
        <UserTabs/>
        <div
        className='max-w-lg mx-auto mt-8'
        >
          <BlockchainPage/>
        </div>
    </div>
  )
}
