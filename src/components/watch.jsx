
import React, { useEffect, useState } from "react";
import axios from 'axios';
import ID from "./Id.jsx";


function Watch() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://18.144.84.131/api/product/view')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="container-Id-View">
           {
            data.map((data) => (
                    <ID
                    id={data.id}
                    nameProduc={data.nameProduc}
                    />
            ))
           }

           
        </div>
        
    )



}

export default Watch;