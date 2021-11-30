import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { signUp } from "../../services/firebase"
import { SignForm } from "../SignForm/SignForm"
import "./SignUp.scss"

export const SignUp = () => {

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSignUp = async (email, pass) => {
        setLoading(true)
        try {
            await signUp(email, pass);
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="signup-page container">
            <h3 className="signup-page__title">Sign Up</h3>
            <div className="signup-page__block-sign">
                <SignForm
                    onSubmit={handleSignUp}
                    error={error}
                    loading={loading} />
                <Link className="signup-page__link-signin" to="/">Sign In</Link>
            </div>

        </div>
    )
}