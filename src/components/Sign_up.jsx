import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Sign_up({children,estado,cambiarestado}){
    const navigator = useNavigate()
    const data = useState({
        name: "",
        email: "",
        password: ""
    })

    const url = 'http://localhost:3000/api/user/create'



    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = values =>{
        console.log(values);
        const data = values
        Swal.fire(
            'Bienvenido!',
            'Cuenta Creada con Exito',
            'success'
        )
        axios.post(url,{
            name: data.name,
            email: data.email,
            password: data.password
        })
        .then(res=>{
            console.log(res.data)
        })
        navigator('/')

    }

    return(
        <>
          {estado &&
        <div className="Overline">

            <div className="ContenedorModal">
                <div >
                    
                </div>


                <div className="form-create">
                <p className="text3">sign up</p>
                            <p></p>
                  <p className="text2">It is fast and easy.</p>


                    <form className="was-validated" noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                           
                            <input type="text"className="controls" placeholder="name" {...register("name",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                }
                            })}></input>
                            {errors.name && <span className="text-danger">{errors.name.message}</span>}
                        </div>
                        <div className="mb-4">
                           
                            <input type="text" className="controls"  placeholder="Email" {...register("email",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                },
                                pattern:{
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalido email"
                                }
                            })}></input>
                            {errors.email && <span className="text-danger">{errors.email.message}</span>}
                        </div>
                        <div className="mb-4">
                            
                            <input type="password" className="controls"  placeholder="Password"  {...register("password",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                },
                                minLength:{
                                    value: 4,
                                    message: "La contraseña debe tener minimo 4 caracteres"
                                }
                            })}></input>
                            {errors.password && <span className="text-danger">{errors.password.message}</span>}
                        </div>
                        <div >
                            <button type="submit"className="button-2">Registrar</button>
                        </div>
                        <button className="buttonClose" onClick={()=> cambiarestado(!estado)} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path
                                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg>
                            </button>
                      
                    </form>
                    {children}
                </div>
            </div>
        </div>
          }
        </>
    );
}

export default Sign_up;