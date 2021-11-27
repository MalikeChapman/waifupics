// import fetch from 'node-fetch';

const select = document.getElementById("selectid");
const value = select.options[select.selectedIndex].value;
const button = document.getElementById("submitid");

button.addEventListener("click", getimage);

function getimage(){
    const url = `https://api.waifu.pics/sfw/${value}`;
    let source;
    fetch(url)
    .then(response => response.json())
    .then(data => 
        {source = data.url;
        console.log(data);
        const img = document.getElementById("img");
        img.src = source;
    });
}