"use client"
import Link from "next/link";

import { CgMenuGridR } from "react-icons/cg";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";

export default function MenuBar() {

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
              <Link href="/calendar" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} w-[100px]`}>
                  캘린더
                </NavigationMenuLink>
              </Link>
              <Link href="" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} w-[100px]`}>
                  메모
                </NavigationMenuLink>
              </Link>
              <Link href="" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} w-[100px]`}>
                  주식
                </NavigationMenuLink>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}