
import {RENTALZ_RENTAL_CART_ITEMS} from "../constants.js"

const getRentalCartItemDefaultValues = (product) => {

  const rentalCartItems = getRentalCartItems();
  console.log('Retnal Cart Items');
  console.log(JSON.stringify(rentalCartItems));

  if (rentalCartItems){

    const returnRentalCartItem = findRentalCartItem(rentalCartItems, product);
    console.log('Return Cart Items');
    console.log(JSON.stringify(returnRentalCartItem));

    if (returnRentalCartItem){
      return returnRentalCartItem;
    }else{
      return getRentalCartItemInitialValues();
    }
  }else{
    return getRentalCartItemInitialValues();
  }
}

const findRentalCartItem = (rentalCartItems, product) => {

  const returnRentalCartItem = rentalCartItems.find( (rentalCartItem) => {

    if (product && rentalCartItem.product._id === product._id){

      let newRentalCartItem = rentalCartItem;

      newRentalCartItem.bookingDates = {

        startDate: Date.parse(rentalCartItem.bookingDates.startDate),
        endDate: Date.parse(rentalCartItem.bookingDates.endDate)
      }

      return newRentalCartItem;
    }
  }) 

  return returnRentalCartItem;
}


const getRentalCartItemInitialValues = () => {

  let rentalCartItemInitialValues = {
    bookingDates : {
      startDate : new Date(),
      endDate : new Date()
    },
    totalNoOfDays : 0,
    quantity : 1
  }

  console.log('Rental Cart Item Initial Values');
  console.log(JSON.stringify(rentalCartItemInitialValues));

  return rentalCartItemInitialValues;
}

const getRentalCartItems = () => {

  let rentalCartItems = new Array();

  const item = localStorage.getItem(RENTALZ_RENTAL_CART_ITEMS);

  if (item){

    rentalCartItems = JSON.parse(item);
  }
  return rentalCartItems;

}

const addItem = (product, bookingDates, totalNoOfDays, quantity) => {

  const rentalCartItems = getRentalCartItems();

  const existingRentalCartItem = findRentalCartItem(rentalCartItems, product);

  if (existingRentalCartItem){

    existingRentalCartItem.bookingDates = bookingDates;
    existingRentalCartItem.totalNoOfDays = totalNoOfDays;
    existingRentalCartItem.quantity = quantity;

  }else{

    const newRentalCartItem = {
      product : product,
      bookingDates : bookingDates,
      totalNoOfDays,
      quantity
    }

    rentalCartItems.push(newRentalCartItem);
  }

  setRentalCartItemsToLocalStorage(rentalCartItems)
}

const setRentalCartItemsToLocalStorage = (rentalCartItems) => {

  const rentalCartItemsAsJSON = JSON.stringify(rentalCartItems);
  localStorage.setItem(RENTALZ_RENTAL_CART_ITEMS, rentalCartItemsAsJSON);
}

export {getRentalCartItemDefaultValues, addItem, getRentalCartItems}