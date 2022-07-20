import React from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";

const Profile = () => {
  return (
    <div className="w-4/5 mt-8">
      <div className="mb-4 font-semibold text-xl uppercase">User List Page</div>
      <div className="grid grid-cols-6 gap-4">
        <Link to="/login">
          <ProfileIcon
            name={"Fakhri"}
            avatar={"https://picsum.photos/id/1042/300"}
          />
        </Link>
        <Link to="/login">
          <ProfileIcon
            name={"Yusfi"}
            avatar={"https://picsum.photos/id/1/400"}
          />
        </Link>
        <Link to="/login">
          <ProfileIcon
            name={"PapaZalo"}
            avatar={"https://picsum.photos/250"}
          />
        </Link>
        <Link to="/login">
          <ProfileIcon
            name={"MamaZali"}
            avatar={"https://picsum.photos/id/1015/300"}
          />
        </Link>
        <ProfileIcon name={"add new"} avatar={"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} />
      </div>
    </div>
  );
};

export default Profile;
