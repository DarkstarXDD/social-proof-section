export default function Rating(props) {
  const stars = []

  for (let i = 0; i < props.numOfStars; i++) {
    stars.push(
      <img
        key={i}
        className="rating__star"
        src="./icon-star.svg"
        alt=""
        width="17px"
        height="16px"
      />
    )
  }
  return (
    <div className={`rating flex-column ${props.ratingClassName}`}>
      <div className="rating__stars">{stars}</div>
      <p className="rating__text">
        Rated {props.numOfStars} Stars in {props.raterName}
      </p>
    </div>
  )
}
