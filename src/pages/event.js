import React, { useEffect, useState } from 'react'
import { getDataFromServer } from '../shared/utilities'
import EventList from '../components/EventList'
import Layout from '../components/layout';
import { globalHistory } from '@reach/router'
import Event from '../components/Event'
import { Link } from 'gatsby';


function EventPage() {

  const [data, setData] = useState([]);
  const [id, setId] = useState('');

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

  // check the url for a parameter after /event
  const path = globalHistory.location.pathname
  let parameter = getParameter(path)

  useEffect(() => {
    const endpointEvents = 'https://missionone.com.au/api/events/'
    const token = process.env.GATSBY_MISSION_ONE_API_TOKEN

    getDataFromServer(endpointEvents, token)
      .then(data => {
        setData(data)
        setId(getParameter(path))
      })
  }, [])

  useEffect(() => {
    setId(parameter)
  }, [parameter])


  let eventComponent
  if (id === '' & data.length === 0) {
    eventComponent = <div>Loading...</div>
  } else if (id !== '') {
    let event = getEventFromID(data, parameter)
    eventComponent = <Event data={event} />
  } else {
    eventComponent = <EventList data={data} />
  }

  return (
    <Layout>
      <Link to="/event"><h2>Events</h2></Link>
      {eventComponent}
    </Layout>
  )
}

export default EventPage
