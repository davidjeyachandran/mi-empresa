import React from "react"
import { Link } from 'gatsby'

const EventPreview = ({ data }) => {
  const event = data

  return (
    <div
      className="event"
      style={{ marginBottom: "20px", background: "#eee" }}
    >
      <Link to={'/event/' + event.id} activeClassName="active">
        <h2>{event.title}</h2>
      </Link>
      <p>{event.locationState}</p>
      <p>{event.startDate}</p>
      <img height="100px" src={event.thumbnailImage} alt={event.title} />
    </div>
  )
}

export default EventPreview
