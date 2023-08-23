// https://superheroapi.com/api/142572722203489

const SUPERHERO_TOKEN = '142572722203489'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

let btn = document.getElementById('newBtn')
let heroImg = document.getElementById('heroImage')
let inputHero = document.getElementById('inputHero')
let searchBtn = document.getElementById('searchBtn')
let headName= document.getElementById('headName')
let stats= document.getElementById('stats')



const getSearchHero=(name)=>{
    fetch(`${BASE_URL}/search/${name}`).then(response=>response.json()).then(json=>{
        const hero= json.results[0]
        headName.innerText= hero.name
        stats.innerHTML= `<p>🧠Intelligence: ${hero.powerstats.intelligence} 💪Strength: ${hero.powerstats.strength} 🏃Speed: ${hero.powerstats.speed} 🏋️Durability: ${hero.powerstats.Durability} 👊Power: ${hero.powerstats.power} ⚔️Combat: ${hero.powerstats.combat}</p>` 
        heroImg.innerHTML= `<img src='${hero.image.url}' width= 400/>`
    })
}

searchBtn.onclick=()=>{
    getSearchHero(inputHero.value) 
}



btn.onclick=()=>{
    let num =Math.floor(Math.random()*731) +1
    getRandomHero(num)
}

const getRandomHero = (id)=> {
    fetch(`${BASE_URL}/${id}`).then(response => response.json()).then(json=> {
        headName.innerText= json.name
        stats.innerHTML= `<p>🧠Intelligence: ${json.powerstats.intelligence} 💪Strength: ${json.powerstats.strength} 🏃Speed: ${json.powerstats.speed} 🏋️Durability: ${json.powerstats.Durability} 👊Power: ${json.powerstats.power} ⚔️Combat: ${json.powerstats.combat}</p>` 
        heroImg.innerHTML = `<img src='${json.image.url}' class='object-cover'/>`
    })
}



