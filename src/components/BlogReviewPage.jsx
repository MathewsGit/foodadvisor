function BlogReviewPage(props) {
  const review = props.review

  if (!review) {
    return null
  }

  return (
    <article className="blog-review">
      <div className="blog-review-image" aria-label="Reviewer photo" role="img">🙂</div>
      <div className="blog-review-content">
        <div className="blog-review-actions">
          <button className="map-button" type="button">Maps</button>
          <button className="share-button" type="button">Share</button>
        </div>
        <p className="small-title">Review by</p>
        <h1 className="reviewer-name">{review.reviewer}</h1>
        <button className="review-restaurant-link" type="button" onClick={props.onRestaurant}>{review.restaurant.name}</button>
        <p className="blog-review-detail">📍 {review.restaurant.location}</p>
        <p className="blog-review-detail">★ {review.rating} out of 5</p>
        <p className="blog-review-detail">🍽️ {review.dish}</p>
        <button className="report-button" type="button">Report review</button>
        <p className="blog-review-text">{review.experience}</p>
      </div>
    </article>
  )
}

export default BlogReviewPage
