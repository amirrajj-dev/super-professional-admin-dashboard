import React from 'react'
import SettingsCardContainer from '../common/SettingsCardContainer'
import { IoIosNotificationsOutline } from "react-icons/io";
import ToggleSwitch from './ToggleSwitch';
const Notifications = () => {
  return (
    <SettingsCardContainer title='اعلان ها' Icon={IoIosNotificationsOutline}>
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h4 className='text-gray-400'>فرستادن اعلان ها</h4>
            <ToggleSwitch label='' initialChecked={true} />
          </div>
          <div className="flex items-center justify-between">
            <h4 className='text-gray-400'>فرستادن اعلان ها در قالب ایمیل</h4>
            <ToggleSwitch label='' />
          </div>
          <div className="flex items-center justify-between">
            <h4 className='text-gray-400'>فرستادن اعلان ها در قالب اس ام اس</h4>
            <ToggleSwitch label='' initialChecked={true} />
          </div>
        </div>
    </SettingsCardContainer>
  )
}

export default Notifications