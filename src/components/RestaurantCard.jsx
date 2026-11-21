function RestaurantCard(props) {
  const isSaved = props.wishlist.some((restaurant) => restaurant.name === props.restaurant.name)

  return (
    <article className="restaurant-result">
      <button className="restaurant-result-main" type="button" onClick={() => props.onRestaurant(props.restaurant)}>
        <span className="result-picture" aria-hidden="true">🍽️</span>
        <span className="result-details">
          <span className="small-title">{props.restaurant.location}</span>
          <strong>{props.restaurant.name}</strong>
          <span>{props.restaurant.description}</span>
          <span>★ {props.restaurant.rating} · {props.restaurant.reviewCount} reviews · {props.restaurant.price}</span>
        </span>
        <span className="result-arrow" aria-hidden="true">›</span>
      </button>
      {props.onWishlist && (
        <button
          className={`restaurant-heart ${isSaved ? 'saved' : ''}`}
          type="button"
          aria-label={isSaved ? `Remove ${props.restaurant.name} from wishlist` : `Add ${props.restaurant.name} to wishlist`}
          onClick={() => props.onWishlist(props.restaurant)}
        >
          {isSaved ? '\u2665' : '\u2661'}
        </button>
      )}
      {props.onRemove && (
        <button className="wishlist-remove" type="button" onClick={() => props.onRemove(props.restaurant)}>
          Remove
        </button>
      )}
    </article>
  )
}

export default RestaurantCard
