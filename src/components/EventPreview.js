import React from "react"

const EventPreview = ({ data, index, selectEvent }) => {
  const event = data

  return (
    <div
      className="event"
      style={{ marginBottom: "20px", background: "#eee" }}
      data-id={event.id}
      data-index={index}
      onClick={selectEvent}
    >
      {console.log(event)}
      <a href={event.eventURL} rel="noopener">
        <h2>{event.title}</h2>
      </a>
      <p>{event.locationState}</p>
      <p>{event.startDate}</p>
      <img height="100px" src={event.thumbnailImage} alt={event.title} />
    </div>
  )
}

export default EventPreview
