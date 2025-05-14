import { CiUser } from "react-icons/ci";
import SettingsCardContainer from '../common/SettingsCardContainer';

const Profile = () => {
  return (
    <SettingsCardContainer title="پروفایل" Icon={CiUser}>
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <img
          src="https://secure.gravatar.com/avatar/9662741d385e79d8991c1a53c35d449f?s=96&d=mm&r=g"
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full shadow-md"
          alt="profile"
        />
        <div className="flex flex-col gap-1 sm:gap-3 text-center sm:text-right">
          <h3 className="text-white text-lg font-dana-demi">امیرحسین رجایی</h3>
          <span className="text-gray-400 text-sm">amiramraja@gmail.com</span>
        </div>
      </div>

      <div className="flex justify-center sm:justify-start">
        <button className="btn btn-primary font-dana-medium py-2 px-4">
          ویرایش پروفایل
        </button>
      </div>
    </SettingsCardContainer>
  );
}

export default Profile;