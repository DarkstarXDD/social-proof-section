export default function Card(props) {
  return (
    <li className={`card flex-column ${props.cardClassName}`}>
      <div className="card__profile-section">
        <img
          className="card__img"
          src={props.cardImg}
          alt={props.cardName}
          width="80px"
          height="80px"
        />
        <div className="card__name-container flex-column">
          <p className="card__name">{props.cardName}</p>
          <p className="card__verified-status">{props.verifiedStatus}</p>
        </div>
      </div>
      <p className="card__testimonial">{`"${props.cardTestimonial}"`}</p>
    </li>
  )
}
