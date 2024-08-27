import React from "react";
import UserItem from "../UserItem";

//library components
import {
  Bell,
  Calculator,
  Calendar,
  Cookie,
  CreditCard,
  icons,
  Inbox,
  Logs,
  ReceiptText,
  Settings,
  Smile,
  User,
  UserPen,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { text } from "stream/consumers";
const Sidebar = () => {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          text: "Profile",
          icon: <UserPen />,
        },
        {
          link: "/inbox",
          text: "Inbox",
          icon: <Inbox />,
        },
        { link: "/", text: "Billing", icon: <ReceiptText /> },
        {
          link: "/",
          text: "Notifications",
          icon: <Bell />,
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          text: "General Settings",
          icon: <Settings />,
        },
        {
          link: "/",
          text: "Privacy",
          icon: <Cookie />,
        },
        { link: "/", text: "Logs",
            icon:<Logs />
         },
      ],
    },
  ];

  return (
    <div className="fixed p-5 flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: any, index) => (
              <CommandGroup key={index} heading={menu.group}>
                {menu.items.map((item: any, index) => (
                  <CommandItem style={{ cursor: "pointer" }} key={index}>
                    {item.icon}
                    <span className="ml-1">{item.text}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
            <CommandSeparator />
          </CommandList>
        </Command>
      </div>
      <div>Settings/ Notification</div>
    </div>
  );
};

export default Sidebar;
