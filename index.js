function getPlants(){
  fetch('http://localhost:3000/plants')
  .then(response => response.json())
  .then(resp => resp.forEach(plant => {displayPlant(plant)
    mouseEvent()
    }
  ))
}

getPlants()

function displayPlant(plant){
  const plantCollection = document.getElementById("plant-collection")
  const div = document.createElement("div")
  // document.querySelector("div")
  div.classList.add("card")
  // const descr = plant.description
  const p = document.createElement("p")
    p.classList.add("pclass")
    p.innerText = plant.description
    const img = document.createElement("img")
    // document.querySelector("img")
    img.src = plant.image
    img.classList.add("plant-list")
    const button = document.createElement("button")
    // document.querySelector("button")
    button.classList.add("donate-btn")
    button.id = plant.id
    button.textContent = "Donate"
    button.addEventListener("click",() => {
      alert("Thanks for your donation!")
    })
    div.append(img, p, button)
    plantCollection.append(div)
}
function mouseEvent(){
  document.querySelectorAll(".card").forEach(card  => {
    card.addEventListener("mouseenter",() => {
      const plantInfo = card.querySelector(".pclass")
      plantInfo.classList.add("display")
      
    })
    card.addEventListener("mouseleave",e => {
      // console.log('event', e)
      // console.log("mouse off")
      const plantInfo = card.querySelector(".pclass")
      plantInfo.classList.remove("display")
    })
  })
}
function btn(){
  const form = document.querySelector("#subscribe")
  form.addEventListener("submit", (e)=> {
    e.preventDefault()
    alert("You've subcribed to our newsletter!")
    // console.log(e)
  })
}
btn()
