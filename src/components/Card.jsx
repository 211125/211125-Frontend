import "../asset/Style/Login.css"


const Card = (props) => {
    return (
        <div className="form-getImg">
            <img src={props.name} class="tamalito-img-top"></img><br /><br/>
            <div className="text-princi"><h3>{props.nameProduc}</h3></div><br/>
            <div className="card-price"><span className="text-primary fw-bold fs-5">Precio:${props.price}  </span></div><br/>
            <div className="card-amount"><span className="text-primary fw-bold fs-5">Stock: {props.amount}</span></div><br/>
            <div className="card-description"><span className="text-primary fw-bold fs-5">Descripcion: {props.description}</span></div>
        </div>
    )
}

export default Card;
