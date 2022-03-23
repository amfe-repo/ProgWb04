import axios from 'axios';

const url = "http://www.raydelto.org/agenda.php";

const getData = async function()
{
    return await axios.get(url);
}

const postData = async function(data)
{
    let request = await fetch(url,
            {
                method: "POST",
                body: JSON.stringify(data)
            });

    let response = await request.json();

    return response;
}

export { getData, postData };
