import React from "react"
import { Link } from 'gatsby'

const Event = ({ data }) => {
  return (
    <div className="event" style={{ marginBottom: "20px", background: "#eee" }}>
      {/* <Link to={data.eventURL} activeClassName="active"></Link> */}
      <h2>{data.title}</h2>

      <img src={data.thumbnailImage} alt={data.title} />
      <p>{data.locationState}</p>
      <p>{data.startDate}</p>
      <div dangerouslySetInnerHTML={{ __html: data.eventDetails }} />
    </div>
  )
}

export default Event