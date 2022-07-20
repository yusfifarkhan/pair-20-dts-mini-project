import React from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";

const Profile = () => {
  return (
    <div className="w-4/5 mt-8">
      <div className="mb-4 font-semibold text-xl uppercase">Profile Page</div>
      <div className="grid grid-cols-6 gap-4">
        <Link to="/login">
          <ProfileIcon
            name={"Fakhri"}
            avatar={"http://placeimg.com/640/360/any"}
          />
        </Link>
        <Link to="/login">
          <ProfileIcon
            name={"Yusfi"}
            avatar={"http://placeimg.com/640/360/any"}
          />
        </Link>
        <Link to="/login">
          <ProfileIcon
            name={"PapaZalo"}
            avatar={"http://placeimg.com/640/360/any"}
          />
        </Link>
        <Link to="/login">
          <ProfileIcon
            name={"MamaZali"}
            avatar={"http://placeimg.com/640/360/any"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Profile;
