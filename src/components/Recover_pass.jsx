import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import axios from "axios";
import {NavLink} from "react-router-dom";


function Recover_pass() {
  const data = useState({
    email: '',
})

  const url = 'http://localhost:3000/api/email/send'

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = values => {
    const data = values;
    axios.post(url,{
      email: data.email
    })
    .then(response => {
      console.log(response.data);
    })
    console.log(data.email);
    let timerInterval
    Swal.fire({
      title: 'Enviando Email...',
      timer: 2500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire(
          'Enviado!',
          '',
          'success'
        )
      }
    })
  }

  return (
    <div className="ContenedorModal">
      <div >
      <div className="middle">
        <span><a className="btn2 btn4" href="/">behind</a></span>
       </div>


        <div>
         
          <h2 className="fw-bold text-center py-5">Recuperar Password</h2>
          <form className="form-changePass" noValidate onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="form-label">Escribe Tu Correo</label>
              <input type="text" className="form-control" placeholder="Email" required  {...register("email", {
                required: {
                  value: true,
                  message: "El campo requerido",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalido email"
                }
              })}></input>
              {errors.email && <span className="text-danger">{errors.email.message}</span>}
            </div>
            <div >
              <button type="submit" >Restablecer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Recover_pass;