import React from 'react'
import { ReturnBtn } from '../ui/ReturnBtn';

export const RegisterScreen = () => {
  return (
    <div className="auth__container animate__animated animate__fadeIn animate__faster">

      <ReturnBtn path="/auth"  />

      <h1 className="auth__title">
        ¿Eres nuevo por aquí? <br/>
        ¡Registrate!
      </h1>

      <form className="auth__form" autoComplete="off">
        <input 
          type="text" 
          className="auth__form-input"
          name="name"
          placeholder="Tu nombre"
        />
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
        <input 
          type="text" 
          className="auth__form-input"
          name="pass2"
          placeholder="Confirma la contraseña"
        />

        <button 
          type="submit"
          className="auth__btn auth__btn-block"
        >
          Registrarme
        </button>
      </form>
      
    </div> 
  )
}