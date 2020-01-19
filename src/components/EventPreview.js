import React from "react"

const EventPreview = ({ data }) => {
  const event = data

  return (
    <div
      className="event"
      style={{ marginBottom: "20px", background: "#eee" }}
    >
      <a href={'/event/' + event.id}>
        <h2>{event.title}</h2>
      </a>
      <p>{event.locationState}</p>
      <p>{event.startDate}</p>
      <img height="100px" src={event.thumbnailImage} alt={event.title} />
    </div>
  )
}

export default EventPreview
