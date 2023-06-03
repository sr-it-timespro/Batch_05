



import {User} from "../models/UserModel.js";

const loginUser = async (req, res) => {

  // const email = req.body.email;
  // const password = req.body.password;
  
  // 'welcome'
  const {email, password} = req.body; 

  try{

    // User.findOne({email: email})

    const user = await User.findOne({email})

    if (user){

      const outcome = await user.verifyPassword(password)

      if (outcome){

        res.json({
          _id : user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin
        })
      }else{
          res.status(401);
          res.json({
            message: `Invalid password for the email/username ${email}`
          })
      }
    }else{

      res.status(401);
      res.json({
        message : "Invalid email - Dont have permission to access"
      })
    }

  }catch(error){

    console.log(error);
  }

}

export {loginUser}