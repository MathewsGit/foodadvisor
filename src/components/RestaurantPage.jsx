import { useState } from 'react'

function RestaurantPage(props) {
  const [section, setSection] = useState('Menu')
  const restaurant = props.restaurant

  if (!restaurant) {
    return null
  }

  const isSaved = props.wishlist.some((savedRestaurant) => savedRestaurant.name === restaurant.name)

  return (
    <section className="restaurant-page">
      <div className="restaurant-banner">
        <div className="restaurant-banner-top">
          <span className="open-label">Open now</span>
          <button className="map-button" type="button">Map</button>
        </div>
        <button className={`bookmark-button ${isSaved ? 'saved' : ''}`} type="button" aria-label={isSaved ? 'Remove from wishlist' : 'Add to wishlist'} onClick={() => props.onWishlist(restaurant)}>{isSaved ? '\u2665' : '\u2661'}</button>
        <p className="small-title">Restaurant</p>
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
        <p className="restaurant-location">{restaurant.location}</p>
        <div className="restaurant-info">
          <span>{restaurant.price} price range</span>
          <span>{restaurant.time}</span>
          <button className="rating-link" type="button" onClick={() => setSection('Reviews')}>★ {restaurant.rating} · Reviews</button>
        </div>
      </div>

      <div className="restaurant-content">
        <nav className="restaurant-tabs" aria-label="Restaurant information">
          <button className={section === 'Menu' ? 'active' : ''} type="button" onClick={() => setSection('Menu')}>Menu</button>
          <button className={section === 'Timings' ? 'active' : ''} type="button" onClick={() => setSection('Timings')}>Timings</button>
          <button className={section === 'Reviews' ? 'active' : ''} type="button" onClick={() => setSection('Reviews')}>Reviews</button>
        </nav>
        <div className="restaurant-section">
          {section === 'Menu' && <MenuSection restaurant={restaurant} />}
          {section === 'Timings' && <TimingsSection restaurant={restaurant} />}
          {section === 'Reviews' && <ReviewsSection restaurant={restaurant} />}
        </div>
      </div>
    </section>
  )
}

function MenuSection(props) {
  return (
    <section>
      <h2>{props.restaurant.name} menu</h2>
      <p className="results-note">Popular menu items</p>
      <div className="menu-row">
        {props.restaurant.menu.map((item) => (
          <div className="menu-card" key={item.name}>
            <span className="menu-picture" aria-hidden="true">{item.picture}</span>
            <strong>{item.name}</strong>
            <span>{item.description}</span>
            <b>{item.price}</b>
          </div>
        ))}
        <div className="menu-card allergen-card"><span className="menu-picture" aria-hidden="true">⚠</span><strong>Allergen information</strong><span>Please ask the restaurant about ingredients and allergens.</span></div>
      </div>
    </section>
  )
}

function TimingsSection(props) {
  return (
    <section>
      <h2>Opening times</h2>
      <p className="results-note">Weekly timings · {props.restaurant.location}</p>
      <div className="timing-list">
        {props.restaurant.hours.map((timing) => (
          <div key={timing[0]}><strong>{timing[0]}</strong><span>{timing[1]}</span></div>
        ))}
      </div>
    </section>
  )
}

function ReviewsSection(props) {
  return (
    <section>
      <h2>Ratings and reviews</h2>
      <div className="review-summary"><strong>{props.restaurant.rating} <span>★</span></strong><span>Based on {props.restaurant.reviewCount} reviews</span></div>
      {props.restaurant.reviews.map((review) => (
        <article className="review-card" key={review.title}>
          <strong>{review.title}</strong>
          <span className="review-stars">{'★'.repeat(Math.round(Number(review.rating)))}{'☆'.repeat(5 - Math.round(Number(review.rating)))}</span>
          <p><b>{review.dish}:</b> {review.experience}</p>
          <span className="review-author">{review.reviewer} · Recent visit</span>
        </article>
      ))}
    </section>
  )
}

export default RestaurantPage
