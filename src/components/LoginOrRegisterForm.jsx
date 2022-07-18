// Di sini kita harus menggunakan useEffect
import React, { useEffect, useState } from "react";

import styles from "./LoginOrRegisterForm.module.css";

import { Grid, Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

// Pada bagian ini sekarang kita membutuhkan fungsi untuk melakukan login dan register
import {
  auth,
  loginDenganEmailDanPassword,
  registerDenganEmailDanPassword,
} from "../authentication/firebase";

// Untuk memudahkan kita meng-track user sedang login atau tidak, kita bisa menggunakan
// hooks yang disediakan pada react-firebase-hooks
// Dokumentasi:
// - https://github.com/CSFrequency/react-firebase-hooks/tree/master
// - https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth

// Karena kita sudah membuat fungsi kita sendiri
// maka kita hanya perlu menggunakan hooks useAuthState saja
import { useAuthState } from "react-firebase-hooks/auth";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  // di sini kita akan menggunakan hooks useAuthState
  // useAuthState ini menerima 2 parameter:
  // parameter 1: auth (yang kita buat dan export dari firebase)
  // parameter 2 (optional): options (dalam bentuk object)
  //    digunakan apabila ingin menggunakan hooks dengan lebih detail (melihat perubahan user)
  //    (Pada pembelajaran ini tidak digunakan)

  // Mengembalikan 3 data (dalam array)
  // user: akan mengembalikan auth.User apabila ada yang log in, dan null bila tidak ada
  // loading: boolean yang digunakan sebagai indikator apakah firebasenya sedang menunggu login
  // error: bila ada error yang diberikan
  const [user, isLoading, error] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    // console.log("Login");
    // navigate("/");

    // Kita di sini tidak menggunakan navigate ke login lagi,
    // karena pada firebase, ketika selesai login,
    // maka auth statenya akan otomatis berubah (hooks useAuthState, data user)
    loginDenganEmailDanPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    // console.log("Register");
    // navigate("/login");

    // Kita di sini tidak menggunakan navigate ke login lagi, karena pada Firebase
    // Ketika selesai register akan otomatis login juga
    // dan auth statenya akan otomatis berubah (hooks useAuthState, data user)
    registerDenganEmailDanPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  // Lalu sekarang bagaimana kita track orang yang sedang login, dan apabila ada yang login
  // kita pindahkan ke halaman utama?

  // Kita gunakan.... useEffect !
  useEffect(
    () => {
      // Nah di sini mungkin kita bisa modifikasi / menggunakan
      // isLoading sebagai logic untuk menampilkan loading screen
      // (pada pembelajaran ini loading screen tidak dibuat)
      if (isLoading) {
        // Tampilkan loading screen (bila ada)
        return;
      }

      // Lalu apabila usernya ditemukan (ada / tidak null)
      // Maka akan kita navigasikan ke halaman HomePage
      if (user) {
        navigate("/");
      }
    },
    // Sekarang dependency kita tergantung pada user dan isLoading dari useAuthState
    [user, isLoading, navigate]
  );

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {loginOrRegister === "login"
                ? "Sign in to your account"
                : "Register Your Account"}
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  label="Email"
                  type="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={credential.email}
                  onChange={textFieldEmailOnChangeHandler}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  label="password"
                  type="password"
                  value={credential.password}
                  onChange={textFieldPasswordOnChangeHandler}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>

              <div className="text-sm">
                {loginOrRegister === "login" ? (
                  <a
                    href="/register"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Register?
                  </a>
                ) : (
                  <a
                    href="/login"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Login?
                  </a>
                )}
              </div>
            </div>

            <div>
              <button
                onClick={buttonLoginOrRegisterOnClickHandler}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                {loginOrRegister === "login" ? "Login" : "Register Account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginOrRegisterForm;
