function saveLocalInfo(info)
{
    let arr = [];

    if(existData())
        arr = JSON.parse(localStorage.getItem("data"));

    arr.push(info);
    localStorage.setItem("data", JSON.stringify(arr));
}

function existData()
{
    return localStorage.getItem("data") != null;
}

function getData()
{
    return JSON.parse(localStorage.getItem("data"));
}

export {saveLocalInfo, existData, getData};
