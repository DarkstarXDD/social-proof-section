import cardData from "./data/cardData.json"
import reviewerData from "./data/reviewerData.json"
import Card from "./components/Card.jsx"
import Review from "./components/Review.jsx"

export default function App() {
  const cards = cardData.map(function (currentCard) {
    return (
      <Card
        key={currentCard.id}
        cardName={currentCard.name}
        cardImg={currentCard.image}
        verifiedStatus={currentCard.verifiedStatus}
        cardTestimonial={currentCard.testimonial}
      />
    )
  })

  const reviews = reviewerData.map(function (currentReviewer) {
    return (
      <Review
        key={currentReviewer.id}
        reviewerName={currentReviewer.reviewerName}
        numOfStars={currentReviewer.stars}
      />
    )
  })

  return (
    <main>
      <div className="top-section">
        <h1 className="top-section__title">
          10,000+ of our users love our products.!
        </h1>
        <p className="top-section__text">
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <div className="reviews-container">{reviews}</div>
      <div className="cards-container">{cards}</div>
    </main>
  )
}
