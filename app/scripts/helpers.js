/*
 * Helpers
 * Helper functions to deliver card data
*/

const chance = require('chance').Chance();

// Global scope Name variables
let orderNum = 1;


// Returns a generated name at random
export function getRandomName() {
  return chance.name();
}


// Returns a random order id number
export function getOrderNumber() {
  return orderNum++;
}


// Returns an address at random
export function getCustomerAddress() {
  return chance.address();
}


// Create Card
export function createCard() {
  const card = {};
  card.id = getOrderNumber();
  card.address = getCustomerAddress();
  card.customer = getRandomName();
  card.courier = getRandomName();
  card.eta = chance.minute(); // assign pickup time

  return card;
}
