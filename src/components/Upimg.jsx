import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card.jsx";



function Upimg() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/product/view')
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    // const postDelete = (id, e) => {
    //     e.preventDefault();
    //     axios.delete(`http://localhost:3000/api/img/eliminar?id=${id}`)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    //     Swal.fire({
    //         title: 'Eliminando...',
    //         text: 'Usuario de Id: ' + id + ' Eliminado',
    //         icon: 'warning',
    //         confirmButtonText: 'Ok'
    //     })
    // }

    return (
        <div className="container-card-Upimg">
           {
            data.map((data) => (
                    <Card
                    name={data.name}
                    nameProduc={data.nameProduc}
                    description={data.description}
                    price={data.price}
                    amount={data.amount}
                    />
            ))
           }

           
        </div>
        
    )



}

export default Upimg;