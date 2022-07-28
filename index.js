function getPlants(){
  fetch('http://localhost:3000/plants')
  .then(response => response.json())
  .then(resp => resp.forEach(plant => {displayPlant(plant)
    mouseEvent()
    }
  ))
}
