import React from 'react'

function Review({review, author}) {
  return (
    <div className = "Review">
        <p className = "ReviewText">
            {review}
        </p>
        <p className = "ReviewAuthor">
            {author}
        </p>
    </div>
  )
}

export default Review