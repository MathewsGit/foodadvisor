function EventCard(props) {
  return (
    <a className="food-card event-card" href="#events">
      <span className="card-icon" aria-hidden="true">✓</span>
      <span>{props.name}</span>
    </a>
  )
}

export default EventCard