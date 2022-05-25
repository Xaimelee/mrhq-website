import React from 'react'

function Review({review, author}) {
  return (
    <li  className = "Review">
        <p className = "ReviewText">
            {review}
        </p>
        <p className = "ReviewAuthor">
            {author}
        </p>
    </li>
  )
}

export default Review