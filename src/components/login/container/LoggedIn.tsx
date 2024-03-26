import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { authService } from "@/firebase/firebaseInstance";
import useUserStore from "@/store/user-store"
import React, { MouseEventHandler } from "react";

export default function LoggedIn(props: {
  userPopup: boolean;
  handleUserPopup: MouseEventHandler<HTMLButtonElement>
}) {

  const { userInfo, deleteUserInfo } = useUserStore();

  const logoutFB = () => {
    const logoutConfirm = confirm("로그아웃 하시겠습니까?")
    if (logoutConfirm) {
      authService.signOut()
      deleteUserInfo()
    }
  };

  return (
    <React.Fragment>
      <Button onClick={props.handleUserPopup}>
        <span className="text-[14px]">{userInfo.displayName}</span>
      </Button>

      {props.userPopup &&
        <Card className="absolute z-10 right-0 mt-3 w-72 p-5 text-center">
          <CardHeader>
            <CardTitle>{userInfo.displayName}</CardTitle>
            <CardDescription>{userInfo.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li className="flex h-10 justify-between leading-10">
                <div className="w-[120px] rounded-l-2xl border cursor-pointer hover:bg-primary hover:text-white">계정설정</div>
                <div
                  className="w-[120px] rounded-r-2xl border cursor-pointer hover:bg-primary hover:text-white"
                  onClick={logoutFB}>로그아웃</div>
              </li>
            </ul>
          </CardContent>
        </Card>}

    </React.Fragment>
  )
}