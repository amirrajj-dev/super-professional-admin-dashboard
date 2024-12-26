import { FaMoneyBillWave } from "react-icons/fa6";
import SettingsCardContainer from '../common/SettingsCardContainer'

const Billing = () => {
  return (
    <SettingsCardContainer title='وام' Icon={FaMoneyBillWave}>
        <div className="flex items-center justify-between">
            <h4 className='font-dana-medium text-gray-400'>برنامه فعلی</h4>
            <span className='text-indigo-500 font-dana-demi'>حرفه ای</span>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 mt-6 rounded transition duration-200 text-white font-dana-medium py-2 px-4">
        تغیر برنامه
      </button>
    </SettingsCardContainer>
  )
}

export default Billing