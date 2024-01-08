export default function Review(props) {
  const stars = []

  for (let i = 0; i < props.numOfStars; i++) {
    stars.push(
      <img key={i} className="review__star" src="./icon-star.svg" alt="" />
    )
  }
  return (
    <div className="review">
      <div className="review__stars">{stars}</div>
      <p className="review__text">
        Rated {props.numOfStars} Stars in {props.reviewerName}
      </p>
    </div>
  )
}
