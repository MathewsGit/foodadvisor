function FeaturedRestaurant() {
  return (
    <section className="featured">
      <div className="restaurant-picture" aria-hidden="true">🍽️</div>
      <div>
        <p className="small-title">Featured restaurant</p>
        <h2>Restaurant name</h2>
        <p>A friendly place to enjoy a good meal.</p>

        <div className="restaurant-info">
          <span>★ 4.2</span>
          <span>Visits: 159</span>
          <a href="#updates">Updates</a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedRestaurant