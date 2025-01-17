import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logOut } from "../../apis/firebase";

const User = () => {
  const [user] = useAuthState(auth);
  let navigate = useNavigate();

  return (
    <ul className="flex gap-4 text-black font-semibold">
      <li>
        {user ? (
          <button
            className={`w-full px-4 py-2 bg-slate-50 rounded-md hover:font-semibold`}
            onClick={() => {
              logOut();
              navigate("/");
            }}
          >
            Logout!
          </button>
        ) : (
          <button
            className={`w-full px-4 py-2 bg-slate-50 rounded-md hover:font-semibold`}
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in / Sign Up!
          </button>
        )}
      </li>
      <li>
        <button
          className={`w-full px-4 py-2 bg-slate-50 rounded-md hover:font-semibold`}
          onClick={() => {
            navigate("/profile");
          }}
        >
          User
        </button>
      </li>
    </ul>
  );
};

export default User;
