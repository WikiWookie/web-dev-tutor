// Save Button Element
var saveGardenItemButton = document.getElementById("saveGardenItem");
saveGardenItemButton.addEventListener("click", saveGardenItem);

/*
 * Gets plant form data and saves it in dexie database
 */
async function saveGardenItem() {
  const plantName = document.getElementById("plantName").value;
  const plantedDate = document.getElementById("plantedDate").value;

  var newPlant = {
    plantName: plantName, 
    plantedDate: plantedDate
  };

  console.log('newPlant before save', newPlant);

  const savedPlant = await savePlant(newPlant); // Function from plant-table.database.js

  console.log('newPlant saved', newPlant);
}
