import React from "react"
import { useState } from "react"
import "./SignForm.scss"

export const SignForm = ({ onSubmit, error, loading }) => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleChangeEmail = (ev) => {
        setEmail(ev.target.value);
    }

    const handleChangePass = (ev) => {
        setPass(ev.target.value);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();

        onSubmit(email, pass);

        setEmail("");
        setPass("");
    }

    return (
        <div className="sign-form">
            <h3 className="sign-form__title">Войдите или зарегистрируйтесь!</h3>
            <form className="sign-form__form" onSubmit={handleSubmit}>
                <input
                    className="sign-form__input"
                    type="text" value={email}
                    onChange={handleChangeEmail}
                    placeholder="email" />

                <input
                    className="sign-form__input"
                    type="password"
                    value={pass}
                    onChange={handleChangePass}
                    placeholder="password"
                />
                <button
                    className="sign-form__btn"
                    type="submit"
                    disabled={loading}>Войти</button>
            </form>
            {error && <h4>{error}</h4>}
        </div>
    )
}