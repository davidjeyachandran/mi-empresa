import React, { useState } from 'react'
import EventPreview from './EventPreview'
import Event from './Event'

function EventList({ data }) {

  const [event, setEvent] = useState(null);

  function selectEvent(e) {
    let id = e.target.dataset.id
    let index = e.target.dataset.index
    console.log(id, index);
    setEvent(data[index])
  }

  let allEvents = data.map((event, index) => <EventPreview key={event.id} index={index} data={event} selectEvent={selectEvent} />)

  return (
    <div>
      {console.log(event)}
      {(event) ? <Event data={event} /> : allEvents}
    </div>
  )
}

export default EventList
