import { CgMenuGridR } from "react-icons/cg";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { useRouter } from "next/navigation";
import { ref, remove } from "firebase/database";
import useUserStore from "@/store/user-store";
import { db } from "@/firebase/firebaseInstance";

interface PropsType {
  data: MemoType;
  readOne: () => void;
}

export default function MemoContent(props: PropsType) {
  const { userInfo } = useUserStore();

  const router = useRouter();

  const handleEdit = (id: number) => router.push(`/memo/modify/${id}`)

  const handleDelete = (id: number) => {
    const confirmMessage = confirm("정말 삭제하시겠습니까?")
    if (confirmMessage) {
      remove(ref(db, `/${userInfo.uid}/memo/${id}`))
      props.readOne()
    }
  }

  return (
    <Card>
      <div className="flex justify-between">
        <CardHeader>
          <CardTitle>{props.data.title}</CardTitle>
        </CardHeader>

        <NavigationMenu className="mr-3 rounded-md">
          <NavigationMenuList >
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <i><CgMenuGridR /></i>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[100px]">
                  <li
                    className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                    onClick={() => handleEdit(props.data.id)}
                  >수정</li>
                  <li
                    className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                    onClick={() => handleDelete(props.data.id)}
                  >삭제</li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <CardContent className="h-32">
        <div dangerouslySetInnerHTML={{ __html: props.data.text }}></div>
      </CardContent>

      <CardFooter className="justify-end">
        <CardDescription>{props.data.date} {props.data.time}</CardDescription>
      </CardFooter>
    </Card>
  )
}