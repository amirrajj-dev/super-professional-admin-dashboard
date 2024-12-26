import Header from "../components/common/Header";
import Billing from "../components/settings/Billing";
import ConnectedAccounts from "../components/settings/ConnectedAccounts";
import DeleteAccount from "../components/settings/DeleteAccount";
import Notifications from "../components/settings/Notifications";
import Profile from "../components/settings/Profile";
import Region from "../components/settings/Region";
import Security from "../components/settings/Security";

const SettingsPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="تنظیمات" />
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 my-8 sm:my-12 md:my-16">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
          <Profile />
          <Notifications />
          <Security />
          <Region />
          <Billing />
          <ConnectedAccounts />
          <DeleteAccount/>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
