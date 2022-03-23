import './Card.css';

const Card = (props) =>
{
    let data = {name: "Not", lastname: "LastNot", phone: "000-000-0000"};

    if(props.data)
        data = props.data;

    return (
        <div className="container-card  col-md-3">
            <div className="card">
              <h5 className="card-header">{data.nombre}</h5>
              <div className="card-body">
                <h5 className="card-title">{data.apellido}</h5>
                <p className="card-text">{data.telefono}</p>
              </div>
            </div>
        </div>
    )
}

export default Card;
