import { useState, useEffect } from 'react';
import * as ApiConsume from '../../Services/Axios/ApiConsume';

import Card from './CardComponent';

const ContainerCard = () =>
{
    const [userData, setUserData] = useState([]);

    let counter = 0;
    let counterInserted = 0;

    /*
    Process to render:
        - UseEffect execute getInfo on the first render
        - The async function is executed and state UserData is avoid
        - The CARD component is avoid in the first render
        - When the async function is finish setUserData is executed
        - When setUserData is excuted the component is render, but useEffect not is executed
        - The CARD component is full with UserData
    */

    async function getInfo()
    {
        let info = await ApiConsume.getData();
        setUserData(info.data);
    }

    useEffect(()=>
    {
        getInfo();
        console.log("hola");
    }, []);

    return (
        <div>
            <div className="text-center">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-bs-toggle="tab" href="#contacts">Contacts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#inserted">Inserted</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane active" id="contacts">
                        <div className="row justify-content-center">
                            {
                                userData.map(res=>
                                {
                                    counter = counter + 1;
                                    return <Card data={res} key={counter}></Card>;
                                })
                            }
                        </div>
                     </div>
                    <div className="tab-pane" id="inserted">
                        <div className="row justify-content-center">
                            {
                                JSON.parse(localStorage.getItem("data")).map(res=>
                                    {
                                        counterInserted = counterInserted + 1;
                                        return <Card data={res} key={counterInserted}></Card>
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerCard;
