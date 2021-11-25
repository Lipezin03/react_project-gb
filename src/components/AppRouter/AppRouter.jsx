import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Chats } from "../../pages/Chats/Chats.jsx"
import { Profile } from "../../pages/Profile/Profile.jsx"
import { Home } from "../../pages/Home/Home.jsx";
import { Error404 } from "../../pages/Error404/Error404.jsx";
import { SpaceNews } from "../../pages/SpaceNews/SpaceNews.jsx";

export const AppRouter = () => {

    return (
        <div className="app">

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="chats" element={<Chats />}>
                    <Route path=":name" element={<Chats />} />
                </Route>
                <Route path="/profile" element={<Profile />} />
                <Route path="/space-news" element={<SpaceNews />} />
                <Route path="*" element={<Error404 />} />
            </Routes>

        </div>
    );
}