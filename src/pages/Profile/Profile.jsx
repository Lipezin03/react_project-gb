import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, userRef } from '../../services/firebase';
import { changeName } from '../../store/profileReducer/action';
import { getSelectorName } from '../../store/profileReducer/selectors';
import { onValue, set } from '@firebase/database';
import "./Profile.scss"


export const Profile = () => {

    const name = useSelector(getSelectorName)

    const [value, setValue] = useState("")

    const dispatch = useDispatch();

    useEffect(() => {
        // Возможно в firebase истек срок действия базы данных и это не работает сейчас
        const unsubscribe = onValue(userRef, (snapshot) => {
            console.log(snapshot.val())
            const userData = snapshot.val()
            dispatch(changeName(userData?.name || ""))
        })
        return unsubscribe;
    }, [changeName])


    const handleChangeText = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        set(userRef, {
            name: value,
        });
        dispatch(changeName(value))
        setValue("");
    };

    const handleLogOutClick = async () => {
        try {
            await logOut()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="profile container">
            <h3 className="profile__title">Profile {name}</h3>
            <div className="profile__block">

                <form onSubmit={handleSubmit} className="profile__form">
                    <p className="profile__text">Введите имя чтобы отправлять сообщения под этим именем</p>
                    <input
                        type="text"
                        value={value}
                        className="profile__input"
                        placeholder="Имя"
                        onChange={handleChangeText} />
                    <button
                        className="profile__btn-add-name"
                        type="submit">Принять</button>
                </form>

                <button className="profile__btn-signout" onClick={handleLogOutClick}>Sign Out</button>

            </div>

        </div>

    )
}