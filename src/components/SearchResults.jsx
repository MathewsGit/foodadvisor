import restaurants from './restaurantData'
import RestaurantCard from './RestaurantCard'
import SearchBar from './SearchBar'

function SearchResults(props) {
  const search = props.search.toLowerCase().replace(/[^a-z0-9]/g, '')
  const matchingRestaurants = restaurants.filter((restaurant) => {
    const searchableText = `${restaurant.name} ${restaurant.description} ${restaurant.location}`.toLowerCase().replace(/[^a-z0-9]/g, '')
    return searchableText.includes(search)
  })
  const results = matchingRestaurants

  return (
    <section className="results-page">
      <SearchBar initialSearch={props.search} onSearch={props.onSearch} />
      <div className="results-toolbar">
        <span>Results for “{props.search}”</span>
        <div>
          <button type="button">Filters</button>
          <button type="button">Sort</button>
        </div>
      </div>

      <section className="food-section">
        {results.length > 0 ? (
          <>
            <h2>Restaurants for you</h2>
            <p className="results-note">{results.length} matching restaurants</p>
            <div className="restaurant-results">
              {results.map((restaurant) => (
                <RestaurantCard key={restaurant.name} restaurant={restaurant} wishlist={props.wishlist} onRestaurant={props.onRestaurant} onWishlist={props.onWishlist} />
              ))}
            </div>
          </>
        ) : (
          <div className="search-empty">
            <h2>We couldn’t find restaurants that match “{props.search}”</h2>
            <p>Try another restaurant name or search with different words.</p>
          </div>
        )}
      </section>
    </section>
  )
}

export default SearchResults
