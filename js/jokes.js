let jokeHtml=document.getElementById('joke');

async function randomJoke(){
let response = await fetch('https://icanhazdadjoke.com/', {
    headers: {'Accept': 'application/json',},
});
let data = await response.json();
console.log(data);
jokeHtml.innerHTML = ('"'+  data.joke + '"');

}


function randomJokeTwo(){
    fetch('https://icanhazdadjoke.com/',{
        headers: {'Accept': 'application/json',},
    })
    .then(response => response.json())
    .then(data => { jokeHtml.innerHTML = `${data.joke}`});
}