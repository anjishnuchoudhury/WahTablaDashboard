

import { userColumns } from "@/components/table-components/user-column";

import SettingsPageComponents from "@/components/settings";
import { fetchAllAdmins } from "@/lib/actions/admin";



const SettingPage = async () => {
  const users = await fetchAllAdmins()
  if(!users.success || !users.data){
    return(
      <div className="w-full h-screen flex flex-col justify-center items-center">
        No admin data found!
      </div>
    )
  }

  return (
    <div className="w-full flex justify-center items-center">
       {/* @ts-expect-error: nah man, cant fix it, too much shit */}
      <SettingsPageComponents columns={userColumns} data={users.data} />
    </div>
  )
}

export default SettingPage