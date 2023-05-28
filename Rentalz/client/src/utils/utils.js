
import moment from "moment";

const getRentalProductAvailabilityMessage = (product) => {

  return (product.availableQuantity === 0) ? "Not Available" : "Available in Stock"  
}


const getBookingDatesDiffInDays = (bookingDates) => {

  let startDate = bookingDates[0];
  let endDate = bookingDates[1];

  startDate = moment(startDate);
  endDate = moment(endDate);

  const diffInDays = endDate.diff(startDate, "days");
  return diffInDays;
}

export {getRentalProductAvailabilityMessage, getBookingDatesDiffInDays}

