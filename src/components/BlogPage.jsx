import restaurants from './restaurantData'

function BlogPage(props) {
  const reviews = restaurants.flatMap((restaurant) => restaurant.reviews.map((review) => ({ ...review, restaurant })))
  const trendingReviews = [...reviews].sort((first, second) => Number(second.rating) - Number(first.rating)).slice(0, 6)
  const latestReviews = reviews.slice(-6).reverse()

  return (
    <section className="blog-page">
      <section className="food-section blog-section">
        <h2>Trending</h2>
        <div className="blog-row">
          {trendingReviews.map((review) => <BlogCard key={`${review.restaurant.name}-${review.title}`} review={review} onClick={props.onReview} />)}
        </div>
      </section>

      <section className="food-section blog-section">
        <h2>Latest</h2>
        <div className="blog-row">
          {latestReviews.map((review) => <BlogCard key={`${review.restaurant.name}-${review.title}`} review={review} onClick={props.onReview} />)}
        </div>
      </section>
    </section>
  )
}

function BlogCard(props) {
  return (
    <button className="blog-card" type="button" onClick={() => props.onClick(props.review)}>
      <span className="blog-picture" aria-hidden="true">🍽️</span>
      <strong>{props.review.title}</strong>
      <span className="blog-restaurant">{props.review.restaurant.name}</span>
      <span className="blog-card-rating">★ {props.review.rating} <span aria-label="Like">♡</span> <span aria-label="Comments">▢</span></span>
    </button>
  )
}

export default BlogPage
