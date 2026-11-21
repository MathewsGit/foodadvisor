import restaurants from './restaurantData'
import RestaurantCard from './RestaurantCard'

function DiscoverPage(props) {
  return (
    <section className="discover-page">
      <div className="discover-heading">
        <p className="small-title">Find your next favourite</p>
        <h1>Discover restaurants</h1>
        <p>Browse popular places, menus and reviews.</p>
      </div>
      <section className="food-section">
        <h2>Popular restaurants</h2>
        <p className="results-note">{restaurants.length} places to explore</p>
        <div className="restaurant-results">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} restaurant={restaurant} wishlist={props.wishlist} onRestaurant={props.onRestaurant} onWishlist={props.onWishlist} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default DiscoverPage
