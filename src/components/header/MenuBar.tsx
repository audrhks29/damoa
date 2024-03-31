"use client"

import { CgMenuGridR } from "react-icons/cg";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import useUserStore from "@/store/user-store";
import { useRouter } from "next/navigation";

export default function MenuBar() {
  const { userInfo } = useUserStore()
  const router = useRouter();

  const handleClickMenu = (link: string) => {
    userInfo ? router.push(link) : alert("로그인 이후 사용가능합니다.")
  }

  return (
    <div className="relative">
      <div className="text-[30px] cursor-pointer text-orange-600 mr-3">
      </div>

      <NavigationMenu className="mr-3 border border-primary rounded-md">
        <NavigationMenuList >
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <i><CgMenuGridR /></i>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[100px]">
                <li
                  className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                  onClick={() => handleClickMenu('/calendar')}
                >캘린더</li>
                <li
                  className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                  onClick={() => handleClickMenu('/memo')}
                >메모</li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}