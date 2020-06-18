// Save Button Element
var saveGardenItemButton = document.getElementById("saveGardenItem");

async function saveGardenItem() {
  console.log("saveGardenItem Called!");

  const plantName = document.getElementById("plantName").value;
  const plantedDate = document.getElementById("plantedDate").value;

  console.log("plantName", plantName);
  console.log("plantedDate", plantedDate);

  var newPlant = {
    plantName: plantName, 
    plantedDate: plantedDate
  };

  console.log("newPlant", newPlant);

  await saveGardenItemToDb(newPlant);

  console.log('Garden Item Saved!');

  const plants = await db.plant.toArray();
  console.log('plants', plants);
}

saveGardenItemButton.addEventListener("click", saveGardenItem);
