import React from 'react';
import Review from './Review';
import { useState } from "react";

function ShowReviews() {
    const reviews = [
        {review: "test", author: "1"},
        {review: "test", author: "2"},
        {review: "test", author: "3"}
    ]
    const [index, setIndex] = useState(0);

    function changeReview(int) {
        if (int < 0) {
            setIndex(reviews.length -1);
        } else if (int >= reviews.length) {
            setIndex(0)
        } else {
            setIndex(int);
        }
    }

    return (
        <ul className = "ShowReviews">
            <button className = "ReviewButton" onClick ={() => {changeReview(index - 1)}}></button>
            <Review review={reviews[index].review} author={reviews[index].author}/>
            <button className = "ReviewButton" onClick ={() => {changeReview(index + 1)}}></button>
        </ul>
    )
}

export default ShowReviews