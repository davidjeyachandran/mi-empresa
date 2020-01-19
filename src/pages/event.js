import React, { useEffect, useState } from 'react'
import { getDataFromServer } from '../shared/utilities'
import EventList from '../components/EventList'
import Layout from '../components/layout';
import { globalHistory } from '@reach/router'
import Event from '../components/Event'

function EventPage() {

  const [data, setData] = useState([]);

  function getParameter(url) {
    console.log('getParameter2: ' + url)
    const urlArray = url.split('/')
    let id = urlArray[urlArray.length - 1]
    return (isNaN(parseInt(id))) ? '' : id
  }

  function getEventFromID(data, id) {
    console.log('getEventFromID: ' + id)
    let idNum = parseInt(id)
    if (isNaN(idNum)) return ''
    let event = data.filter(item => item.id === idNum)
    return event[0]
  }

  useEffect(() => {
    const endpointEvents = 'https://missionone.com.au/api/events/'
    const token = process.env.GATSBY_MISSION_ONE_API_TOKEN

    getDataFromServer(endpointEvents, token)
      .then(data => {

        // check the url for a parameter after /event
        const path = globalHistory.location.pathname
        let parameter = getParameter(path)
        let event = null

        // if we have a parameter then data is a single event
        if (parameter !== '') {
          event = getEventFromID(data, parameter)
          setData(event)
        } else {
          setData(data)
        }
      })
  }, [])

  let eventComponent
  if (data.length === 0 || data == null) {
    eventComponent = <div>Loading...</div>
  } else if (data.length > 1) {
    eventComponent = <EventList data={data} />
  } else {
    eventComponent = <Event data={data} />
  }

  return (
    <Layout>
      <h2>Events</h2>
      {console.log(data)}
      {eventComponent}
    </Layout>
  )
}

export default EventPage
