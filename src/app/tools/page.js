import PriceByDayChart from '@/components/charts/PriceByDayChart'
import TokenPieChart from '@/components/charts/TokenPieChart'

export default function ToolsPage() {
  return (
    <div className='mt-8 max-w-6xl'>
      <div className='text-center'>
        <h2 className='font-semibold text-4xl'>Coin and Token pricing</h2>
      </div>
      <div className='mt-8'>
          <PriceByDayChart/>
      </div>
      <div className='text-center mt-8'>
        <h2 className='font-semibold text-4xl'>Token price distribution</h2>
      </div>
      <div className='mt-8'>
          <TokenPieChart/>
      </div>
    </div>
  )
}
