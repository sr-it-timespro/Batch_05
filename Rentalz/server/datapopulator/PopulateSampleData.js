
import {User} from "../models/UserModel.js"
import {RentalProduct} from "../models/RentalProductModel.js";

import {users} from "../SampleData/SampleUsers.js"
import rental_products from "../SampleData/SampleRentalProducts.js"

import {connectToDB} from "../utils/DBUtils.js"

import bcrypt from "bcryptjs";

const deleteAll = async () => {


  await User.deleteMany()
  await RentalProduct.deleteMany();

}

const createUsers = async () => {

  console.log('Existing users');
  console.log(users);

  const updatedUsers = users.map( (user) => {

    let updatedUser = user;

    let password = user.password;
    let hashedPassword = bcrypt.hashSync(password, 5);

    updatedUser.password = hashedPassword;

    return updatedUser;
  })


  const createdUsers = await User.insertMany(updatedUsers);
  console.log('Users created');
  console.log(createdUsers);

  return createdUsers;
}

const createRentalProducts = async (adminUserId) => {

  const updatedRentalProducts = rental_products.map( (rentalProduct) => {

    let updatedRentalProduct = rentalProduct;

    // Set the user
    updatedRentalProduct.user = adminUserId;

    const price = rentalProduct.price;

    const rentFor1Day = price / 10;
    const rentForAWeek = (rentFor1Day * (7 - 2));
    const rentForAMonth = (rentFor1Day * (30 - 5));

    //Set the rentalPriceConfigurations
    // [ (DAILY ), (WEEKLY), (MONTHLY)]

    let rentalPriceConfigurations = [];
    rentalPriceConfigurations.push({
      "configurationName" : "DAILY",
      "rentalValue": rentFor1Day
    })

    rentalPriceConfigurations.push({
      "configurationName" : "WEEKLY",
      "rentalValue": rentForAWeek
    })

    rentalPriceConfigurations.push({
      "configurationName" : "MONTHLY",
      "rentalValue": rentForAMonth
    })

    updatedRentalProduct.rentalPriceConfigurations = rentalPriceConfigurations

    // Set the refundable deposit

    updatedRentalProduct.refundableDeposit = (price * 30) /100;

    return updatedRentalProduct;
  })

  const createdRentalProducts = await RentalProduct.insertMany(updatedRentalProducts);
  console.log('Created Rental Products');
  console.log(createdRentalProducts)
}

const createSampleData = async () => {

  await deleteAll();

  const createdUsers = await createUsers();
  // Take out the Admin user
  const adminUser = createdUsers[2];
  const adminUserId = adminUser._id;

  await createRentalProducts(adminUserId); 

}

const destroySampleData = () => {
  
}

connectToDB();
createSampleData();
