import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Background from "./background/Background2"


function Reset_pass() {

    const querystring = window.location.search
    const params = new URLSearchParams(querystring)

    const data = useState({
        password: ''
    })

    const url = 'http://localhost:3000/api/user/update_password'
    const navigator = useNavigate()
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = values =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
      
        var raw = JSON.stringify({
          "email": params.get('email'),
        });
        if (values.password1 === values.password) {
            const data = values
            axios.put(url,{
                email: params.get('email'),
                password: data.password
            })
            .then(response => {
                console.log(response.data);
                Swal.fire(
                    ''+response.data.err+'!',
                    '',
                    'success'
                )
            })
            navigator('/')
        }
        else {
            Swal.fire(
                'password Error!',
                'Valida que sean igual',
                'error'
            )
        }

    }

    return(
        <div className="Overline">
        <div className="ContenedorModal">
          


            <div  >
            <Background></Background >
                
                <form className="form-Upload" noValidate onSubmit={handleSubmit(onSubmit)}>
                <h2 className="fw-bold text-center py-5 ">Restablecer Password</h2>
                    <div className="mb-4">
                        <label className="text-primary fw-bold fs-5">Escribe Tu Nueva Constraseña</label>
                        <input type="password" className="controls" placeholder="Password" {...register("password1",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                },
                                minLength:{
                                    value: 4,
                                    message: "La contraseña debe tener minimo 4 caracteres"
                                }
                            })}></input>
                            {errors.password1 && <span className="text-danger">{errors.password1.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label  className="text-primary fw-bold fs-5">Confirma Tu Constraseña</label>
                        <input type="password" className="controls" placeholder="Password"  {...register("password",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                },
                                minLength:{
                                    value: 4,
                                    message: "La contraseña debe tener minimo 4 caracteres",
                                }
                            })}></input>
                            {errors.password && <span className="text-danger">{errors.password.message}</span>}
                    </div>
                    <div className="label">
                        <button type="submit" className="button-62">Restablecer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Reset_pass;