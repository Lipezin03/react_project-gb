import React from "react";
import { useEffect } from "react"
import { Routes, Route } from 'react-router-dom';
import { Chats } from "../../pages/Chats/Chats.jsx"
import { Profile } from "../../pages/Profile/Profile.jsx"
import { Home } from "../../pages/Home/Home.jsx";
import { Error404 } from "../../pages/Error404/Error404.jsx";
import { SpaceNews } from "../../pages/SpaceNews/SpaceNews.jsx";
import { SignUp } from "../SignUp/SignUp.jsx";
import { auth } from "../../services/firebase.js";
import { useDispatch } from "react-redux";
import { signIn, signOut } from "../../store/profileReducer/action.js";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute.jsx";
import { PublicRoute } from "../PublicRoure/PublicRoure.jsx";

export const AppRouter = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signIn())
            } else {
                dispatch(signOut())
            }
        })
        return () => unsubscribe();
    }, [])

    return (
        <div className="app">
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<PublicRoute />}>
                    <Route path="" element={<Home />} />
                </Route>

                <Route path="/signup" element={<PublicRoute />}>
                    <Route path="" element={<SignUp />} />
                </Route>

                <Route path="chats" element={
                    <PrivateRoute>
                        <Chats />
                    </PrivateRoute>}>
                    <Route path=":name" element={<Chats />} />
                </Route>

                <Route path="/profile" element={
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>} />

                <Route path="/space-news" element={<SpaceNews />} />
                {/* <Route path="/signup" element={<SignUp />} /> */}
                <Route path="*" element={<Error404 />} />
            </Routes>

        </div>
    );
}