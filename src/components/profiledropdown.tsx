import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CircleUser, LogOut, Settings, UserCog } from "lucide-react";
import Link from "next/link";

export default function ProfileDropDown() {
  const lists = [
    {
      item: "My Profile",
      link: "/profile",
      icon: <UserCog className="mr-2 h-4 w-4" />,
    },
    {
      item: "Settings",
      link: "/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <CircleUser
            width={36}
            height={36}
            className="overflow-hidden rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {lists.map((list, index) => (
          <Link href={list.link}>
            <DropdownMenuItem key={index}>
              {list.icon}
              <span>{list.item}</span>
            </DropdownMenuItem>
          </Link>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
