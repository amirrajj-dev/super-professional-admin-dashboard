import { FaMoneyBillWave } from "react-icons/fa6";
import SettingsCardContainer from '../common/SettingsCardContainer';

const Billing = () => {
  return (
    <SettingsCardContainer title="وام" Icon={FaMoneyBillWave}>
      <div className="flex items-center justify-between">
        <h4 className="text-base-content font-dana-medium">برنامه فعلی</h4>
        <span className="text-primary font-dana-demi">حرفه ای</span>
      </div>
      <button className="btn btn-primary mt-6 rounded transition duration-200 font-dana-medium py-2 px-4">
        تغییر برنامه
      </button>
    </SettingsCardContainer>
  );
};

export default Billing;