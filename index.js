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