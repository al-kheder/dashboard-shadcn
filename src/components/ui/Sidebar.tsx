import React from "react";
import UserItem from "../UserItem";

const Sidebar = () => {
    //https://www.youtube.com/watch?v=mju7e6Cf6Nk&list=PL8HkCX2C5h0VGhZnfbwf2hq7yD7nXMbJJ&index=3
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
