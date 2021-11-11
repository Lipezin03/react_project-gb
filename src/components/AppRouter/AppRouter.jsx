import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Chats } from "../../pages/Chats/Chats.jsx"
import { Profile } from "../../pages/Profile/Profile.jsx"
import { Home } from "../../pages/Home/Home.jsx";

export const AppRouter = () => {

    return (
        <div className="app">

            <Routes>
                <Route path="/" />
                <Route path="chats" element={<Chats />}>
                    <Route path=":name" element={<Chats />} />
                </Route>
                <Route path="/profile" element={<Profile />} />
                <Route index element={<Home />} />
            </Routes>

        </div>
    );
}