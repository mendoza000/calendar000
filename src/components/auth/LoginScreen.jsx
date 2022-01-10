import React from 'react'
import { ReturnBtn } from '../ui/ReturnBtn'

export const LoginScreen = () => {
  return (
    <div className="auth__container animate__animated animate__fadeIn animate__faster">
      <ReturnBtn path="/auth"  />

      <h1 className="auth__title">
        ¿Tienes una cuenta? <br/>
        ¡Inicia Sesión!
      </h1>

      <form className="auth__form" autoComplete="off">
        <input 
          type="text" 
          className="auth__form-input"
          name="mail"
          placeholder="Tu correo"
        />
        <input 
          type="text" 
          className="auth__form-input"
          name="pass"
          placeholder="Tu contraseña"
        />

        <button 
          type="submit"
          className="auth__btn auth__btn-block"
        >
          Iniciar Sesión
        </button>
      </form>
      
    </div> 
  )
}