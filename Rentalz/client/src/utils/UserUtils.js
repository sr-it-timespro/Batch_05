
import {RENTALZ_USER} from "../constants.js"

const addUserToLocalStorage = (data) => {

  const dataAsStr = JSON.stringify(data);

  localStorage.setItem(RENTALZ_USER, dataAsStr)

}

const getUserFromLocalStorage = () => {

  const result = localStorage.getItem(RENTALZ_USER)

  if (result){

    return JSON.parse(result);
  }
  return null;
}

const hasUserLoggedIn = () => {

  const result = localStorage.getItem(RENTALZ_USER)
  
  if (result){
    return true;
  }

  return false;
}

const clearAllItems = () => {

  localStorage.clear();
}

export {addUserToLocalStorage, hasUserLoggedIn, getUserFromLocalStorage, clearAllItems}