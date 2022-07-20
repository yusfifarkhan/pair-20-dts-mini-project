import React from "react";

const ProfileIcon = ({ name, avatar }) => {
  return (
    <div className="w-4/5">
      <div className="w-full mt-4 bg-slate-100 flex flex-col">
        <img
          className="object-fill h-296 w-200"
          src={avatar}
          alt="Placeholder"
        />
        <div className="text-lg font-semibold">{name}</div>
      </div>
    </div>
  );
};

export default ProfileIcon;
