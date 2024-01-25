import cardData from "./data/cardData.json"
import ratingData from "./data/ratingData.json"
import Card from "./components/Card.jsx"
import Rating from "./components/Rating.jsx"

export default function App() {
  const ratings = ratingData.map(function (currentRating) {
    return (
      <Rating
        key={currentRating.id}
        raterName={currentRating.raterName}
        numOfStars={currentRating.stars}
        ratingClassName={currentRating.raterName
          .toLowerCase()
          .replace(/ /g, "-")}
      />
    )
  })

  const cards = cardData.map(function (currentCard) {
    return (
      <Card
        key={currentCard.id}
        cardName={currentCard.name}
        cardImg={currentCard.image}
        verifiedStatus={currentCard.verifiedStatus}
        cardTestimonial={currentCard.testimonial}
        cardClassName={currentCard.name.toLowerCase().replace(/ /g, "-")}
      />
    )
  })

  return (
    <main>
      <div className="top-section">
        <h1 className="top-section__title">
          10,000+ of our users love our products.
        </h1>
        <p className="top-section__text">
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <section className="ratings-section">
        <h2 className="visually-hidden">Ratings</h2>
        <ul className="ratings-container flex-column">{ratings}</ul>
      </section>
      <section className="cards-section">
        <h2 className="visually-hidden">Testimonials</h2>
        <ul className="cards-container flex-column">{cards}</ul>
      </section>
    </main>
  )
}
