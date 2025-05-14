import SettingsCardContainer from '../common/SettingsCardContainer'
import { IoLockClosedOutline } from "react-icons/io5";
import ToggleSwitch from './ToggleSwitch'
const Security = () => {
  return (
    <SettingsCardContainer title='امنیت' Icon={IoLockClosedOutline} >
        <div className="flex items-center justify-between">
            <h4 className='font-dana-medium text-gray-400'>احراز هویت دو مرحله ای</h4>
            <ToggleSwitch label='' />
        </div>
        <button className="btn btn-primary mt-6 rounded transition duration-200 text-white font-dana-medium py-2 px-4">
        تغیر رمز عبور
      </button>
    </SettingsCardContainer>
  )
}

export default Security