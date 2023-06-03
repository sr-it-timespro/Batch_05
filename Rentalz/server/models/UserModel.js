import mongoose from "mongoose";

import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
},
  {
    timestamps: true
  }

)

userSchema.methods.verifyPassword = async function (userSuppliedPassword) {

  console.log(this);
  const hashedPassword = this.password;


  // 'welcome1', '#($*$#$#_)$(#)$()#welcome#@#(*(#$'

  const outcome = await bcrypt.compare(userSuppliedPassword, hashedPassword);
  if (outcome){
    console.log("Paassword matches..")
  }else{
    console.log("No Password match")
  }
  return outcome;
}


const User = mongoose.model('User', userSchema);

export { User };
