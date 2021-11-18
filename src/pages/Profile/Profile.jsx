import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCheckbox } from '../../store/profile/action';
import "./Profile.scss"


export const Profile = () => {

    const { checkbox, name } = useSelector(state => state)
    const dispatch = useDispatch();

    const handleChangeCheckbox = () => {
        dispatch(toggleCheckbox())
    }

    return (
        <div className="profile">
            <h3 className="profile__title">My Profile</h3>

            <label className="profile__label">
                <input
                    type="checkbox"
                    checked={checkbox}
                    className="profile__checkbox"
                    onChange={handleChangeCheckbox}
                />
                {name}
            </label>

        </div>

    )
}