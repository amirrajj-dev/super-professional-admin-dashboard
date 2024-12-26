import { TbWorld } from "react-icons/tb";
import SettingsCardContainer from '../common/SettingsCardContainer'

const Region = () => {
  return (
    <SettingsCardContainer title='زبان و منطقه' Icon={TbWorld}  >
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h4 className='font-dana-medium text-gray-400'>زبان</h4>
                <select className='bg-gray-900 text-white rounded p-1 w-44 shadow border border-gray-300' >
                    <option value="spain">اسپانیایی</option>
                    <option value="persian" selected >فارسی</option>
                    <option value="italy">ایتالیایی</option>
                    <option value="france">فرانسوی</option>
                    <option value="american">آمریکایی</option>
                    <option value="protugese">پرتغالی</option>
                </select>
            </div>
            <div className="flex items-center justify-between">
                <h4 className='font-dana-medium text-gray-400'>واحد پول</h4>
                <select className='bg-gray-900 text-white rounded p-1 w-44 shadow border border-gray-300' >
                    <option value="usd">usd</option>
                    <option value="toman" selected >toman</option>
                    <option value="lir">lir</option>
                    <option value="crypto">crypto</option>
                    <option value="yen">yen</option>
                    <option value="euro">euro</option>
                </select>
            </div>
        </div>
    </SettingsCardContainer>
  )
}

export default Region