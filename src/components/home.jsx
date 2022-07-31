import React, { useState } from 'react';
import Swal from 'sweetalert2'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup } from 'reactstrap';
import Img from './img';
import Background from "./background/Background"
import Watch from './watch';





function Home() {
    const [modaladd, setModaladd] = useState(false);
    const add = () => setModaladd(!modaladd);
    const [modalupdate, setModalupdate] = useState(false);
    const update = () => setModalupdate(!modalupdate);
    const [modaldelet, setModaldelet] = useState(false);
    const delet = () => setModaldelet(!modaldelet);
    const [data1, setData1] = useState({
        name: '',
        nameProduc: '',
        description: '',
        price: '',
        amount: '',
        selectedFile: null
    })
    const [data, setData] = useState({
        id: '',
    })

    const [data2, setData2] = useState({
        id: '',
        nameProduc: '',
        description: '',
        price: '',
        amount: '',
    })


    function handle(e) {
        e.preventDefault();
        const newdata = { ...data1 }
        newdata[e.target.id] = e.target.value
        setData1(newdata)
        console.log(newdata)

    }

    function handledelet(d) {
        d.preventDefault();
        const newdata = { ...data }
        newdata[d.target.id] = d.target.value
        setData(newdata)
        console.log(newdata)

    }


    function handleupdate(u) {
        u.preventDefault();
        const newdata = { ...data2 }
        newdata[u.target.id] = u.target.value
        setData2(newdata)
        console.log(newdata)

    }


    const handleFileSelected = (e) => {
        const files = Array.from(e.target.files)
        console.log("files:", files);

        if (files && files.length > 0) {
            const newdata = { ...data1 }
            newdata["selectedFile"] = files[0];
            setData1(newdata)
        }

    }




    const urldelet = 'http://18.144.84.131/api/product/delete'

    const EnviarDelet = (d) => {

        axios.delete(urldelet, {
            data: data,
        })
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        Swal.fire({
            title: 'Datos Eliminados!',
            text: "",
            icon: 'success',
            confirmButtonColor: '#0e46ff',
            confirmButtonText: 'Okay'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace('/home');
            }
        })
        delet(false);

    }


    const urlupdate = 'http://18.144.84.131/api/product/update'

    function Enviarupdate() {
        const formData = new FormData();
        formData.append("id", data2.id);
        formData.append("nameProduc", data2.nameProduc);
        formData.append("description", data2.description);
        formData.append("price", data2.price);
        formData.append("amount", data2.amount);

        axios.post(urlupdate, formData)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        title: 'Que bien',
                        text: "Se actualizo el producto!",
                        icon: 'success',
                        confirmButtonColor: '#0e46ff',
                        confirmButtonText: 'Okay'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.replace('/home');
                        }
                    })
                } else {
                    Swal.fire(
                        'ATENCIÓN',
                        'Ha ocurrido un error al actualizar, reintente',
                        'warning'
                    );
                }
            })

        update(false);

    }

    const urladd = 'http://18.144.84.131/api/product/create'
    function Enviar() {
        const formData = new FormData();
        formData.append("name", data1.selectedFile);
        formData.append("nameProduc", data1.nameProduc);
        formData.append("description", data1.description);
        formData.append("price", data1.price);
        formData.append("amount", data1.amount);

        axios.post(urladd, formData)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        title: 'Que bien',
                        text: "Se agrego nuevo producto!",
                        icon: 'success',
                        confirmButtonColor: '#0e46ff',
                        confirmButtonText: 'Okay'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.replace('/home');
                        }
                    })
                } else {
                    Swal.fire(
                        'ATENCIÓN',
                        'Ha ocurrido un error al guardar la imagen, reintente',
                        'warning'
                    );
                }
            })

        add(false);

    }
/**delite*/


    return (
        <div >
            <div >
                <nav >
                <ul className="bar">
                <li><a className="active" onClick={update}>to update</a></li>
                <li><a className="active" onClick={add}>upload image</a></li>
                <li><a className="text4" href="/">Sign off</a></li>
                <li><a className="active" onClick={delet} >delite</a></li>
            </ul>
                <Background></Background >
                    
                </nav>
               
            </div>
        
            <Img></Img>
            <div>
                <form>
                    <Modal isOpen={modaladd} >
                       
                            <div >
                            <form className="form-Upload"   >
                                <h1 className="heading">Add your Image</h1>
                                    <div>
                                        
                                        
                                        <input type="file" name='file' class="form-control" onChange={handleFileSelected} id="name"  aria-label="Upload" required></input>
                                        <div className="label">
                                       <label  htmlFor="input">

                            </label>
                        </div>
                                    </div>
                                    <div className="label">
                                     
                                        <input type="text" className="Input" onChange={(e) => handle(e)} id="nameProduc" value={data1.nameProduc} placeholder="titulo" required ></input>
                                    </div>
                                    <div className="label">
                           
                                        <input type="text" className="Input" onChange={(e) => handle(e)} id="description" value={data1.description} placeholder="descriptions" required ></input>
                                    </div>
                                    <div className="label">
                                   
                                        <input type="Number" className="Input" onChange={(e) => handle(e)} id="price" value={data1.price} placeholder="precio" required></input>
                                    </div>
                                    <div className="label">
                                        
                                        <input type="Number" className="Input" onChange={(e) => handle(e)} id="amount" value={data1.amount} placeholder="Stock" required></input>
                                    </div>
                                    <div className="label">
                        <Button type="submit" onClick={Enviar} color="primary" className="button-62" >Guardar</Button>
                        </div>
                        <button  onClick={add} className="buttonClose2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path
                                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </button>
                            </form>
                            </div>
                       
                  
                     
                    </Modal>
                </form>

                <form>
                    <Modal isOpen={modalupdate} >
                     
                            <form className="form-Upload" >
                              
                                <h3>Copia y Pega el Token</h3>
                                  <Watch/>
                                    <div>
                                        <Label for="price">Token</Label>
                                        <input type="text" className="form-control" onChange={(u) => handleupdate(u)} id="id" value={data2.id} placeholder="Token" required ></input>
                                    </div>
                                    <div>
                                        <Label for="price">Titulo</Label>
                                        <input type="text" className="form-control" onChange={(u) => handleupdate(u)} id="nameProduc" value={data2.nameProduc} placeholder="titulo" required ></input>
                                    </div>
                                    <div>
                                        <Label for="price">Description</Label>
                                        <input type="text" className="form-control" onChange={(u) => handleupdate(u)} id="description" value={data2.description} placeholder="descriptions" required ></input>
                                    </div>
                                    <div>
                                        <Label for="Stock">Precio</Label>
                                        <input type="text" className="form-control" onChange={(u) => handleupdate(u)} id="price" value={data2.price} placeholder="precio" required></input>
                                    </div>
                                    <div>
                                        <Label for="Stock">Stock</Label>
                                        <input type="text" className="form-control" onChange={(u) => handleupdate(u)} id="amount" value={data2.amount} placeholder="Stock" required></input>
                                    </div>
                                    <div className="label">
                                    <Button type="submit"  className="button-62" onClick={Enviarupdate} color="primary" >Guardar</Button>
                                   </div>
                                   <button  onClick={update} className="buttonClose2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path
                                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </button>
                            </form>
                      
                   
                    </Modal>
                </form>
                <form>
                    <Modal isOpen={modaldelet} >
                            <form className="was-validated" noValidate  >
                                    <h3>Copia y Pega el Token</h3>
                                    <Watch/>
                                    <div class="alert alert-primary" role="alert">
                                    </div>
                                    <div>
                                        <Label for="price">Token</Label>
                                        <input type="text" className="form-control" onChange={(d) => handledelet(d)} id="id" value={data.id} placeholder="Token" required ></input>
                                    </div>
                                    <div className="label">
                                    <Button type="submit"  className="button-62" onClick={EnviarDelet}color="primary" >Guardar</Button>
                                   </div>
                                   <button  onClick={delet} className="buttonClose2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path
                                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </button>
                            </form>
                       
                    </Modal>
                </form>
            </div>
        </div>
    );
}

export default Home;