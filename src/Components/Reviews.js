import React from 'react';
import Review from './Review';
import NextRightIcon from '../Images/next_right.png';
import NextLeftIcon from '../Images/next_left.png';
import { useState } from 'react';

function ShowReviews() {
    const reviews = [
        {review: "I was confused about which insurance to buy but the staff at Turners helped me in finding the right policy.", author: "- Sam, Auckland"},
        {review: "Staff were great and helped me answer my questions. Simple and easy!", author: "- Shawn, Wellington"},
        {review: "Just one word, Fantastic. They know how to deal with the customers. Highly recommended.", author: "- Kamal, Napier"}
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
            <li><button className = "ReviewButton" onClick ={() => {changeReview(index - 1)}}><img className="ReviewButtonImage" src={NextLeftIcon} alt="" /></button></li>
            <Review review={reviews[index].review} author={reviews[index].author}/>
            <li><button className = "ReviewButton" onClick ={() => {changeReview(index + 1)}}><img className="ReviewButtonImage" src={NextRightIcon} alt="" /></button></li>
        </ul>
    )
}

export default ShowReviews