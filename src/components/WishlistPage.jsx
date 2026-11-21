import RestaurantCard from './RestaurantCard'

function WishlistPage(props) {
  return (
    <section className="wishlist-page">
      <div className="discover-heading">
        <p className="small-title">Your saved places</p>
        <h1>Wishlist</h1>
        <p>Keep the restaurants you want to visit in one place.</p>
      </div>
      {props.wishlist.length === 0 ? (
        <div className="wishlist-empty">
          <h2>Your wishlist is empty</h2>
          <p>Save a restaurant with the heart button and it will appear here.</p>
          <button className="explore-button" type="button" onClick={props.onDiscover}>Explore restaurants</button>
        </div>
      ) : (
        <section className="food-section">
          <h2>Saved restaurants</h2>
          <div className="restaurant-results">
            {props.wishlist.map((restaurant) => (
              <RestaurantCard
                key={restaurant.name}
                restaurant={restaurant}
                wishlist={props.wishlist}
                onRestaurant={props.onRestaurant}
                onRemove={props.onRemove}
              />
            ))}
          </div>
        </section>
      )}
    </section>
  )
}

export default WishlistPage
