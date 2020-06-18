// Create instance of Dexie database
const databaseName = 'MyDatabase';
const db = new Dexie(databaseName);

/*
  NOTE: Databases are a collection of 'tables' that are related to each other
  which can be used to query data with certain paramters.  Think of an excel sheet that is
  just rows and colums of data.
    IE: Get all plants from one week ago
    IE: Get a plant with a certain id
*/

// Declare tables, IDs and indexes
// The key is the table name
// The value is a comma separated string of columns for the table 
db.version(1).stores({
  plant: '++id, plantName, plantedDate',
  person: '++id, firstName, lastName' // Just an example of creating a person table
});

/**
 * Get all items from a specified table in the database.
 * @param {string} tableName
 * @returns {Array} of specifed table objects
 */
async function getAllItemsFromSpecifiedTable(tableName) {
  return await db[tableName].toArray();
}

/**
 * Get item with specified id from specified table.
 * @param {string} tableName
 * @param {number} id
 * @returns {Array} of specifed table objects
 */
async function getItemWithIdFromSpecifiedTable(tableName, id) {
  await db[tableName]
		.get(id);
}

/**
 * Saves an item to the specifed table in database
 * @param {object} tableName
 * @param {object} objectToSave
 */
async function saveItemToDb(tableName, objectToSave) {
  await db[tableName].add(objectToSave);
}

// TODO: Update plant in database

// TODO: Delete plant from database