import React from "react"

const Event = ({ data }) => {
  console.log(data)
  return (
    <div className="event" style={{ marginBottom: "20px", background: "#eee" }}>
      <a href={data.eventURL} rel="noopener">
        <h2>{data.title}</h2>
      </a>
      <img src={data.thumbnailImage} alt={data.title} />
      <p>{data.locationState}</p>
      <p>{data.startDate}</p>
      <div dangerouslySetInnerHTML={{ __html: data.eventDetails }} />
    </div>
  )
}

export default Event