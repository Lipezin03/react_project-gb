import React from 'react';
import "../style/Message.scss"

export const Message = ({ isCount, isClickButton }) => {

    return (
        <div className="message">
            <div className="message__content container">
                <h1 className="message__title">Пробуем React в работе</h1>
                <h3 className="message__text">Делаем изменение счетчика по нажатию на кнопку, передовая Props из родительского компонента</h3>
                <div className="message__count">Счетчик: {isCount}</div>
                <button onClick={isClickButton} className="message__button">Увеличить</button>
            </div>
        </div>
    )
}