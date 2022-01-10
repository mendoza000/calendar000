import React from 'react'
import calendarImg from '../../../assets/calendar.svg'

export const AuthScreen = ({history}) => {

  const moveToLogin = () => {
    history.push('/auth/login')
  }

  const moveToRegister = () => {
    history.push('/auth/register')
  }

  return (
    <div className="auth__container animate__animated animate__fadeIn animate__faster">

      <img
        src={calendarImg}
        alt='Calendar img'
        className='auth__img'
      />
      <h1 className="auth__title">
        Calendar000
      </h1>

      <p className="auth__info">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur eius rem eligendi hic, voluptas recusandae vel ipsum natus dignissimos.
      </p>

      <div className="auth__btn-container">
        <button
          className='auth__btn auth__btn-secondary'
          onClick={moveToRegister}
        >
          Registrarme
        </button>
        <button
          className='auth__btn'
          onClick={moveToLogin}
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  )
}