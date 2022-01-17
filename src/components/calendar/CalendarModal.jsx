import React, {useState, useEffect} from 'react'
import Modal from 'react-modal'
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle"
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-clock/dist/Clock.css'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux'

import {modalClose} from '../../actions/ui'
 
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root')
const now = moment().minutes(0).seconds(0).add(1, 'hours');
const end = now.clone().add(1, 'hours')

export const CalendarModal = () => {
	const {ui} = useSelector(state => state)
	const dispatch = useDispatch()

	const [dateStart, setDateStart] = useState(now.toDate())
	const [dateEnd, setDateEnd] = useState(end.toDate())
	const [formValues, setFormValues] = useState({
		title: '',
		notes: '',
		start: now,
		end,
		})
	const [errors, setErrors] = useState({
		title: false,
		date: false
	})
	const {title, notes, start, end: end2} = formValues

	const closeModal = () => dispatch( modalClose() )
	
	const handleStartDateChange = (e) =>{
		if(e !== null){
			setDateStart(e)
			setFormValues({
				...formValues,
				start: e
			})
		}
	}
	const handleEndDateChange = (e) =>{
		if(e !== null){
			setDateEnd(e)
			setFormValues({
				...formValues,
				end: e
			})
		}
	}
	const handleChangeFormValues = (e) => {
		const target = e.target
		setFormValues({
			...formValues,
			[target.name]: target.value
		})
	}
	const handleSubmit = (e) => { // Validaciones de formulario
		e.preventDefault()

		const momentStart = moment(start)
		const momentEnd   = moment(end2) 

		// Si la fecha de inicio es igual o esta despues de la fecha de terminado
		if(momentStart.isSameOrAfter(momentEnd)){
			setErrors({
				...errors,
				date: true
			})
			return toast.error("La fecha de inicio no puede ser mayor o igual a la fecha de finalizado.");
		}

		// Si el titulo es menor a dos letras
		if(title.trim().length < 2){

			setErrors({
				...errors,
				title: true,
				date: false
			})
			return toast.error("El titulo es muy corto.");
		}

		setErrors({
			...errors,
			title: false,
		})
		toast.success("Evento creado!");

	}

	return(
		<Modal
			isOpen={ui.modalOpen}
			onRequestClose={closeModal}
			style={customStyles}
			closeTimeoutMS={200}
			className="modal"
			overlayClassName="modal-fondo"
		>
		<h1 className="modal__title"> 
			<box-icon name='calendar-event'></box-icon>
			Nuevo evento 
		</h1>
		<hr />
	  <form className="container" onSubmit={handleSubmit}>

	    <div className="form-group modal__form-group">
	      <label>Fecha y hora inicio</label>
	    </div>
	      <DateTimePicker
        	onChange={handleStartDateChange}
        	value={dateStart}
        	className={`form-control ${
        		(errors.date)
        		? "modal__form-error"
        		: ""
        	}`}
      	/>

	    <div className="form-group modal__form-group">
	      <label>Fecha y hora fin</label>
	    </div>
	      <DateTimePicker
        	onChange={handleEndDateChange}
        	value={dateEnd}
        	minDate={dateStart}
        	className={`form-control ${
        		(errors.date)
        		? "modal__form-error"
        		: ""
        	}`}
      	/>

    	<hr />
    	<div className="form-group modal__form-group">
        <label>Titulo y notas</label>
        <input 
            type="text" 
            className={`form-control ${
            	(errors.title)
            	? "modal__form-error"
            	: ""
            }`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            onChange={handleChangeFormValues}
            value={title}
        />
        <small id="emailHelp" className="form-text text-muted">
        	Una descripción corta
        </small>
    	</div>

    	<div className="form-group modal__form-group">
        <textarea 
            type="text" 
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            onChange={handleChangeFormValues}
            value={notes}
        ></textarea>
    	</div>

    	<button
        type="submit"
        className="modal__btn"
    	>
        <box-icon name="save"></box-icon>
        <span> Guardar</span>
    	</button>

		</form>

		</Modal>
	)
}