import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaceNews } from '../../store/SpaceNewsReducer/action';
import { getSelectSpaceNews, getRequestSpaceNews, getRequestSpaceNewsError } from "../../store/SpaceNewsReducer/selectors";
import { CircularProgress } from "@mui/material";
import "./SpaceNews.scss"


export const SpaceNews = () => {

    const news = useSelector(getSelectSpaceNews)

    const isLoadung = useSelector(getRequestSpaceNews)

    const error = useSelector(getRequestSpaceNewsError)

    const dispatch = useDispatch();

    const responseSpaceNews = () => {
        dispatch(fetchSpaceNews())
    }

    useEffect(() => {
        dispatch(fetchSpaceNews())
    }, [])

    return (
        <div className="space-news">
            <div className="space-news__content container">
                <h2 className="space-news__title">Spaceflight News</h2>

                <button onClick={responseSpaceNews} className="space-news__btn-respons">News</button>

                {!!error && <h4 className="space-news__error">ERROR: {error}</h4>}

                {isLoadung ? <CircularProgress className="space-news__loader" />

                    : <div className="space-news__items-box">
                        {news.map(el => {
                            return <div className="space-news__item" key={el.id}>
                                <a target="_blank" href={el.url} className="space-news__item-img">
                                    <img className="space-news__img" src={el.imageUrl} alt="img" />
                                </a>

                                <a target="_blank" className="space-news__item-title" href={el.url}>{el.title}</a>
                                <p className="space-news__item-summary">{el.summary}</p>
                            </div>
                        })}
                    </div>
                }



            </div>
        </div>
    )

}