"use client";
import React, { useState } from "react";
import { CommandDemo } from "./Command";
import { BellIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  const [notifications, setNotifications] = useState<any>([
    {
      text: "This is a notification",
      date: "31-08-2024",
      read: true,
    },
    {
      text: "This is another notification",
      date: "31-08-2024",
      read: false,
    },
  ]);

  return (
    <div className="grid grid-cols-2 gap-4  p-4">
      <CommandDemo />
      <div className="flex items-center justify-end ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="relative" variant="outline">
              <div
                className={`h-3 w-3 absolute top-0 right-0 rounded-full my-1 mx-1 ${notifications.find((x: any) => x.read === true) ? "bg-green-500" : "bg-neutral-200"}`}
              ></div>
              <BellIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            {notifications.map((notification: any, index: number) => (
              <DropdownMenuItem
                key={index}
                className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2"
              >
                <div
                  className={`h-3 w-3 rounded-full my-1 ${!notification.read ? "bg-green-500" : "bg-neutral-200"}`}
                ></div>
                <div>
                  <p>{notification.text}</p>
                  <p className="text-xs text-neutral-500 ">
                    {notification.date}
                  </p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Header;
