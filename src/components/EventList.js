import React from 'react'
import EventPreview from './EventPreview'

function EventList({ data }) {

  return (
    <div>
      {data.map((event) => <EventPreview key={event.id} data={event} />)}
    </div>
  )
}

export default EventList
