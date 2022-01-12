import React from 'react'

export const NavBar = () => {
	return(
		<nav className="ui__navbar">
			<span className="ui__navbar-name">
				<box-icon name='calendar'></box-icon>
				Omar
			</span>

			<button className="ui__navbar-logout-btn">
				<box-icon name='log-out-circle'></box-icon>
				Salir
			</button>
		</nav>
	)
}