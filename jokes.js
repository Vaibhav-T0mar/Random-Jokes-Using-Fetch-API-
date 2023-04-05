
const getjo = document.querySelector('.text')
console.log(getjo)
const getj = document.querySelector('button')
getj.addEventListener('click', async function(){
    const jokeRes = await fetch('https://icanhazdadjoke.com/',
    {
        headers:{
            accept: 'application/json'
        }
    })
    const joke = await jokeRes.json();
    // console.log(joke.joke)
    getjo.innerHTML = joke.joke 
})


