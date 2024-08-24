import React from "react";
import UserItem from "../UserItem";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">Menu</div>
      <div>Settings/ Notification</div>
    </div>
  );
};

export default Sidebar;
