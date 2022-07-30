import React,{useState} from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Background from "./background/Background2"
import Text from "./Text";
import Sign_up from "./Sign_up" 


function Login(){
    const [estado,cambiarestado] = useState(false);
    const navigator = useNavigate()
    const data = useState({
        email: '',
        password: '',
        validat: ''
    })

    const url= 'http://localhost:3000/api/user/login'
  
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = values =>{
        const data = values;

        console.log(data);
        axios.post(url,{
            email: data.email,
            password: data.password,
            validat: data.validat
        })
        .then(res =>{
            if (res.request.status === 200){
             
                    Swal.fire(
                        'Bienvenido!',
                        ''+ res.data.data.name+ '',
                        'success'
                    )
                    navigator('/home')
               
                
            }
        })
        .catch(err => {
            Swal.fire(
                'Error!',
                ''+ err.response.data.error +'',
                'error'
            )



        })

    
        
    
    }

    
    



    return(
        <div className="cover-container">
            <div  >
             
            <div >
            <Background></Background >
            <Text></Text>
                </div>

                <div >
                 

                    <form className='form-register' noValidate onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            
                            <input type="text" className="form-control" id="email" placeholder="Email" required {...register("email",{
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
                            
                            <input type="password" className="form-control" placeholder="Password" required {...register("password",{
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
                       
                        <div className="d-grid">
                            <button type="submit" className="button-4">Iniciar Sesion</button>
                        </div><br></br>
                        <div  >
                        <span><a className="button4" href="/recover-password">Have you forgotten the password?</a></span>
                        </div><br></br>
                        <div >
                             <button className="button-6" onClick={()=> cambiarestado(!estado)} >Create account</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            <Sign_up
            estado={estado}
            cambiarestado={cambiarestado}
            ></Sign_up>
        </div>
    );
}

export default Login;