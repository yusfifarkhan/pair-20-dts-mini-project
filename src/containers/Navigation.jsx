import React from "react";
import Branding from "../components/navigation/Branding";
import { Button } from "@mui/material";

import Menu from "../components/navigation/Menu";
import User from "../components/navigation/User";
import { useNavigate } from "react-router-dom";

// Import fungsi untuk melakukan Logout
import { keluarDariApps } from "../authentication/firebase";

const Navigation = () => {
  const navigate = useNavigate();

  // Fungsi ini akan menjadi async await
  // Karena keluarDariApps bersifat async, dan kita harus menunggu
  // keluarDariAppsSelesai, baru boleh navigate
  const buttonLogoutOnClickHandler = async () => {
    // Kita akan memanggil fungsi keluarDariApps di sini
    await keluarDariApps();
    navigate("/login");
  };
  return (
    <nav className="w-full min-h-full pt-4 pb-4 bg-sky-700 text-white flex justify-center">
      <div className="container w-4/5 flex gap-2 justify-between">
        <Branding brandName="BreezyMovies" />
        <Menu />
        <User />
        <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
