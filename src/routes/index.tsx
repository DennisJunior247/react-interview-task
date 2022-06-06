import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider, } from "../context";
import Login from "../pages/Login";
import Signup from "../pages/signUp";


const Index = () => {
    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Signup />} />
                    <Route path={"/login"} element={<Login />} />
                </Routes>
            </BrowserRouter>
        </AppProvider>
    );
};

export default Index;
