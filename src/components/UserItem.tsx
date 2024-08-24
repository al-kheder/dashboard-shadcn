import React from "react";

function UserItem() {
  return (
    <div className="flex items-center justify-center gap-2 border rounded-xl p-4">
      <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500  text-white font-[700] flex items-center justify-center">
        <p></p>Ali
      </div>
      <div>
        <p className="text-[16px] font-bold">Ali Al-kheder</p>
        <p className="text-[12px] text-neutral-500">codewithAli@gmail.com</p>
      </div>
    </div>
  );
}

export default UserItem;
