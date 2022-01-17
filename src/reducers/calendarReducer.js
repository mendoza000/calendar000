import moment from 'moment'
import {types} from '../types/types'

const initialState = {
	events: [{
  title: 'Reunión',
  start: moment().toDate(),
  end: moment().add(2, 'hours').toDate(),
  user: {
    _id: '123abc',
    name: 'Omar'
  }
}], // [{},{},{}]
	active: null, // {}
}

export const calendarReducer = (state=initialState, action) => {
	switch(action.type){
		case types.eventSetActive:
			return{
				...state,
				active: action.payload.event
			};

		default:
			return state
	}
}