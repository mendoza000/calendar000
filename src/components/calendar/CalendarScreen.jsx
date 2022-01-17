import React, {useState} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import 'moment/locale/es'
import {useDispatch, useSelector} from 'react-redux'

import {messages} from '../../helpers/calendar-messages-es'
import {NavBar} from '../ui/NavBar'
import {CalendarEvent} from './CalendarEvent'
import {CalendarModal} from './CalendarModal'
import {modalOpen} from '../../actions/ui'
import { eventSetActive } from '../../actions/events';
import { AddNewFAB } from '../ui/AddNewFAB';

const localizer = momentLocalizer(moment)
moment.locale('es');

export const CalendarScreen = () => {
  const {events} = useSelector(state => state.calendar)
  const dispatch = useDispatch()

  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month'
  )

  const onDoubleClick = (e) => {
    dispatch( modalOpen() )
  }
  const onSelectEvent = (e) => {
    dispatch( eventSetActive(e) )
  }
  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e)
  }

  return (
    <div className="calendar__calendar-screen">
      <NavBar />

      <Calendar 
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        messages={messages}
        components={{
          event: CalendarEvent
        }}
      />
      
      <AddNewFAB />
      <CalendarModal />
    </div>
  )
}