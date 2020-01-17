import React, { useEffect, useState } from 'react'
import { getDataFromServer } from '../shared/utilities'
import EventList from '../components/EventList'

function Event() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const endpointEvents = 'https://missionone.com.au/api/events/'
    const token = process.env.GATSBY_MISSION_ONE_API_TOKEN

    getDataFromServer(endpointEvents, token)
      .then(data => setData(data))
  }, [])

  return (
    <div>
      <h1>Events</h1>
      <EventList data={data} />
    </div>
  )
}

export default Event
