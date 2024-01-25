export default function Card(props) {
  return (
    <li className={`card flex-column ${props.cardClassName}`}>
      <div className="card__profile-section">
        <img
          className="card__img"
          src={props.cardImg}
          alt={props.cardName}
          width="80"
          height="80"
        />
        <div className="card__name-container flex-column">
          <p className="card__name">{props.cardName}</p>
          <p className="card__verified-status">{props.verifiedStatus}</p>
        </div>
      </div>
      <blockquote className="card__testimonial">{`"${props.cardTestimonial}"`}</blockquote>
    </li>
  )
}
