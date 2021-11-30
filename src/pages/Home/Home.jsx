import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SignForm } from "../../components/SignForm/SignForm";
import { logIn } from "../../services/firebase";
import "./Home.scss"

export const Home = () => {

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSignIn = async (email, pass) => {
        setLoading(true)
        try {
            await logIn(email, pass);
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="home-page container">
            <h1 className="home-page__title">Домашняя страница</h1>
            <div className="home-page__block-sign">
                <SignForm onSubmit={handleSignIn} error={error} loading={loading} />
                <Link className="home-page__link-signup" to="/signup">Sign Up</Link>
            </div>

        </div>
    )
}