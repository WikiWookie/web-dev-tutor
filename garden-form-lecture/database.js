// Create instance of Dexie database
const databaseName = 'MyDatabase';
const db = new Dexie(databaseName);


/*
    Databases are a collection of 'tables' that are related to each other
    which can be used to query data with certain paramters.
        IE: Get all plants from one week ago
        IE: Get a plant with a certain id
*/

// Declare tables, IDs and indexes
// The key is the table name
// The value is a comma separated string of ... 
db.version(1).stores({
    plant: '++id, plantName, plantedDate'
});


/**
 * Saves a item to the garden database
 * @param {object} plant
 */
async function saveGardenItemToDb(plant) {
    await db.plant.add({plantName: "TEST", plantedDate: "06/17/2020"});
}
