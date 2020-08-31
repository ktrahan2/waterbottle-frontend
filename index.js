//dom manipulation

// //create, manipulate, append
// const owners = document.createElement('h2')
// owners.textContent = "Owners"
// document.body.append(owners)

// //create, manipulate, append
// const waterbottles = document.createElement('div')
// waterbottles.textContent = "Waterbottles"
// owners.appendChild(waterbottles)

function fetchWaterBottles() {
    fetch('http://localhost:3000/waterbottels')
    .then(resp => resp.json())
    .then(json => renderWaterBottles(json))
}

function renderWaterBottles(bottles) {
    const waterBottle = document.querySelector("h3")
    // console.log(waterBottleNames) 
    bottles.forEach(bottle => {
        const bottleDiv = document.createElement('div')
        bottleDiv.innerHTML = bottle.brand
        waterBottle.appendChild(bottleDiv)
    })
}

document.addEventListener('DOMContentLoaded', function() {
    fetchWaterBottles()
  })