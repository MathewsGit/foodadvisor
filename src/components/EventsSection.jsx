import EventCard from './EventCard'

function EventsSection() {
  return (
    <section className="food-section events-section">
      <h2>Events and promotions</h2>
      <div className="card-row">
        <EventCard name="Buy 1, Get 1 Free" />
        <EventCard name="50% Off ALL Menu" />
        <EventCard name="Free Delivery" />
        <EventCard name="25% Off Selected Items" />
      </div>
    </section>
  )
}

export default EventsSection