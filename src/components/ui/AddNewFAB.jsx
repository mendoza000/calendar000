import React from 'react'
import { useDispatch } from 'react-redux';

import { modalOpen } from '../../actions/ui';

export const AddNewFAB = () => {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch( modalOpen() )
	}

	return(
		<button
			className="ui__fab"
			onClick={handleClick}
		>
			<box-icon name="plus"></box-icon>
		</button>
	)
}