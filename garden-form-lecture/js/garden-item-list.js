// NOTE: This function is wrapped inside a function called an IIFE (if - ee)
//        https://developer.mozilla.org/en-US/docs/Glossary/IIFE
//    This is necessary in order to use the await keyword outside of a function in a javascript file
(async function () {
  // On load get all garden plants from database
  const allPlants = await getAllGardenPlantsFromDatabase();
  addPlantsToHtml();

  /*
  * Gets plant form data and saves it in dexie database
  */
  async function getAllGardenPlantsFromDatabase() {
    return await getAllPlants(); // Function from plant-table.database.js
  }

  function addPlantsToHtml() {
    const gardenListDiv = document.getElementById('garden-list');

    if (allPlants.length > 0 ) {
      for (let i = 0; i < allPlants.length; i++) {
        const newCardElement = 
          `<div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Plant: ${allPlants[i].id}</h5>
                <p class="card-text">Plant Name: ${allPlants[i].plantName}</p>
                <p class="card-text">Planted Date: ${allPlants[i].plantedDate}</p>
                <a href="#" class="btn btn-primary">Edit</a>
                <a href="#" class="btn btn-primary">Delete</a>
              </div>
            </div>
          </div>`;

        gardenListDiv.insertAdjacentHTML('beforeend', newCardElement);
      }
    }
  }
})();