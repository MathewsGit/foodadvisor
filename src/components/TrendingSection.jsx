import TrendingCard from './TrendingCard'

function TrendingSection() {
  return (
    <section className="food-section trending-section">
      <h2>Trending choices among similar people</h2>
      <div className="card-row">
        <TrendingCard name="Mcdonalds Big Mac Meal" />
        <TrendingCard name="KFC Spicy Twister box " />
        <TrendingCard name="Gazania Chicken Mandi" />
        <TrendingCard name="Krispy Kreme Glazed Donut" />
      </div>
    </section>
  )
}

export default TrendingSection