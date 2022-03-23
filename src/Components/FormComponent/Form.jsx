import { useState, useEffect } from 'react';

import * as ApiConsume from '../../Services/Axios/ApiConsume';
import { saveLocalInfo } from '../../Services/LocalStorage/LocalSave';

import './Form.css';

const Form = () =>
{

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    async function saveInfo()
    {
        let data =
        {
            nombre: name,
            apellido: lastName,
            telefono: phone
        };

        let info = await ApiConsume.postData(data);
        saveLocalInfo(info);

    }

    return (
        <form className="row" formAction="" formMethod="get">
            <h2 className="text-center text-primary">Contact Manager</h2>
            <div className="mb-3">
              <label htmlFor="nameControl" className="form-label">Name</label>
              <input type="text" className="form-control" id="nameControl" placeholder="Raydelto"
                   onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <div className="mb-3">
              <label htmlFor="lastNameControl" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastNameControl" placeholder="Hernandez"
                  onChange={(e)=>{setLastName(e.target.value)}} />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneControl" className="form-label">Phone</label>
              <input type="text" className="form-control" id="phoneControl" placeholder="000-000-0000"
                  onChange={(e)=>{setPhone(e.target.value)}} />
            </div>
            <div className="mb-3 text-center">
                <button onClick={()=>{saveInfo()}} className="btn btn-primary col-3">Send</button>
            </div>
        </form>
    )
}

export default Form;
