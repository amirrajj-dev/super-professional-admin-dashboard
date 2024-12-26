import { FaRegQuestionCircle } from "react-icons/fa";
import SettingsCardContainer from "../common/SettingsCardContainer";
import { FaPlus } from "react-icons/fa";
import { connectedAccountsData } from "../../db/data";
import { useState } from "react";
const ConnectedAccounts = () => {
  const [items, setItems] = useState(connectedAccountsData);

  const hanleConnectDisconnect = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "connected" ? "connect" : "connected",
            }
          : item
      )
    );
  };

  return (
    <SettingsCardContainer title="اکانت های متصل" Icon={FaRegQuestionCircle}>
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <item.icon
              className={`text-2xl ${item.id === 3 && "text-blue-500"}`}
            />
            <button
              onClick={() => hanleConnectDisconnect(item.id)}
              className={`px-4 py-1 flex items-center justify-center rounded shadow border bg-${
                item.status === "connected" ? "emerald" : "gray"
              }-500 transition duration-200 hover:bg-emerald-600 border-gray-300 text-white`}
            >
              {item.status === "connected" ? "متصل شده" : "اتصال"}
            </button>
          </div>
        ))}
      </div>
      <div className="flex mt-6 gap-3 text-gray-500 ">
        <FaPlus />
        <span>اضافه کردن اکانت</span>
      </div>
    </SettingsCardContainer>
  );
};

export default ConnectedAccounts;
