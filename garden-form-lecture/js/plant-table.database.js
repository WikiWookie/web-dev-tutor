/**
 * Get all plants from plant table
 * @returns {Array} of plant objects
 */
async function getAllPlants() {
  return await getAllItemsFromSpecifiedTable('plant');
}

/**
 * Get plant with id from plant table
 * @param {number} id
 * @returns {object} plant object
 */
async function getPlant(id) {
  return await getItemWithIdFromSpecifiedTable('plant', id);
}

/**
 * Saves a new plant item to the plant table
 * @param {object} newPlant
 */
async function savePlant(newPlant) {
  return await saveItemToDb('plant', newPlant);
}