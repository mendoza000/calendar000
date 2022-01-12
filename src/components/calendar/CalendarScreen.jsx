import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import 'moment/locale/es'

import {messages} from '../../helpers/calendar-messages-es'
import {NavBar} from '../ui/NavBar'

const localizer = momentLocalizer(moment)
moment.locale('es');

const events = [{
  title: 'Reunión',
  start: moment().toDate(),
  end: moment().add(2, 'hours').toDate(),
}]

export const CalendarScreen = () => {
  return (
    <div className="calendar__calendar-screen">
      <NavBar />

      <Calendar 
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
      />
    </div>
  )
}