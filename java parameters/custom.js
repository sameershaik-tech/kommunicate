let urlString='https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby';

let btnGet=document.querySelector('button');
let input=document.querySelector('input');

let display=document.querySelector('h1');

btnGet.addEventListener('click', ()=>{

    let url=new URL(urlString);
    let searchString=url.search.slice(1);

    let searchParams=new URLSearchParams(searchString);
    let inputParam=input.value;

    if(searchParams.has(inputParam))
    {
        display.innerText=searchParams.get(inputParam);
    }
    else{
        display.innerText='Wrong params'
    }

});