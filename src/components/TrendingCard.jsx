function TrendingCard(props) {
  return (
    <a className="food-card" href="#trending">
      <span className="card-icon" aria-hidden="true">★</span>
      <span>{props.name}</span>
    </a>
  )
}

export default TrendingCard