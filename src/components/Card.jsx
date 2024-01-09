export default function Card(props) {
  return (
    <div className={`card ${props.cardClassName}`}>
      <div className="card__profile-section">
        <img
          className="card__img"
          src={props.cardImg}
          alt={props.cardName}
          width="80px"
          height="80px"
        />
        <div className="card__name-container">
          <h2 className="card__name">{props.cardName}</h2>
          <h2 className="card__verified-status">{props.verifiedStatus}</h2>
        </div>
      </div>
      <p className="card__testimonial">{`"${props.cardTestimonial}"`}</p>
    </div>
  )
}
