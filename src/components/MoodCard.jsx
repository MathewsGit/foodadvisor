function MoodCard(props) {
  return (
    <button className="food-card" type="button">
      <span className="card-icon" aria-hidden="true">✦</span>
      <span>{props.name}</span>
    </button>
  )
}

export default MoodCard