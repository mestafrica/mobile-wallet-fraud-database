import { UserModel } from "../models/user_model.js";
import { userSchema } from "../schema/user_schema.js";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const signUp = async (req, res, next) => {
  try {
    const { error, value } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    //   Checking if user is already in database
    const email = value.email;

    const findIfUserExist = await UserModel.findOne({ email });
    if (findIfUserExist) {
      return res.status(401).send("User is already registered");
    } else {
      const hashedPassword = bcrypt.hashSync(value.password, 12);
      value.password = hashedPassword;

      const addUser = await UserModel.create(value);
      return res.status(201).send("User registered successfully");
    }
  } catch (error) {
    next(error);
  }
};


//code for login and token
export const login = async (req, res, next) => {
  try {
      const {email, password} = req.body
  //Find a user using their unique identifier
  const user = await UserModel.findOne({email:email})
     
  if (!user){
      res.status(401).json('Invalid email or password')
  }else{
  //Verify their password
  const correctPassword = bcrypt.compareSync(password, user.password)
  if(!correctPassword){
      res.status(401).json('Invalid email or password')
  }else{
  //Generate a session
  req.session.user = {id: user.id} 
  console.log('user', req.session.user)
 // Return response
  res.status(200).json('Login successful')

  }

  }
  } catch (error) {
     next(error) 
  }
 
}


export const token = async (req, res, next) => {
try {
    const {email, password} = req.body
//Find a user using their unique identifier
const user = await UserModel.findOne({email:email});
if (!user){
    res.status(401).json('Invalid email or password')
}else{
//Verify their password
const correctPassword = bcrypt.compareSync(password, user.password)
if(!correctPassword){
    res.status(401).json('Invalid email or password')
}else{
//Generate a token
const token = jwt.sign(
  {id: user.id}, 
  process.env.JWT_PRIVATE_KEY,
  {expiresIn: '5h'},
);
req.user = { id: user.id };
console.log('user', req.user)
res.status(200).json({
  message: 'Login successful',
  accessToken: token
})

}

}
} catch (error) {
   next(error) 
}

}


export const logout = async(req, res, next) => {
  try { 
   // Check if session exists
   if (!req.session) {
    return res.sendStatus(404); // Not Found if session does not exist
  }
    req.session.destroy();

    res.status(200).json({message: 'Logged Out Successfully'});
  } catch (error) {
    next(error);
  }
}

