import MoodCard from './MoodCard'

function MoodSection() {
  return (
    <section className="food-section">
      <h2>What are you in the mood for?</h2>
      <div className="card-row">
        <MoodCard name="Burgers" />
        <MoodCard name="Pizza" />
        <MoodCard name="Dessert" />
        <MoodCard name="Others" />
      </div>
    </section>
  )
}

export default MoodSection