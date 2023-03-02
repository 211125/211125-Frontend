import React, { useEffect, useState } from "react";
import axios from 'axios';
import Produc from "./produc.jsx";



function Img() {

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




    return (
        <div className="container-card-Upimg">
           {
            data.map((data) => (
                    <Produc
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

export default Img;