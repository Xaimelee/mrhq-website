import React from 'react';
import Review from './Review';
import NextRightIcon from '../Images/next_right.png';
import NextLeftIcon from '../Images/next_left.png';
import { useState } from 'react';

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
            <li><button className = "ReviewButton" onClick ={() => {changeReview(index - 1)}}><img src={NextLeftIcon} alt="" /></button></li>
            <Review review={reviews[index].review} author={reviews[index].author}/>
            <li><button className = "ReviewButton" onClick ={() => {changeReview(index + 1)}}><img src={NextRightIcon} alt="" /></button></li>
        </ul>
    )
}

export default ShowReviews