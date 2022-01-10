import React from 'react'
import { useHistory } from 'react-router-dom';

export const ReturnBtn = ({path = '/'}) => {
	const history = useHistory()
	
	const moveToPath = () => {
		history.push(path)
	}
	return(
		<button 
			className="ui__return-btn"
			onClick={moveToPath}
		>
			<box-icon name='left-arrow-alt'></box-icon>
		</button>
	)
}