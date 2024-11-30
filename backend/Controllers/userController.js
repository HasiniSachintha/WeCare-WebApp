import User from '../models/UserSchema.js';
import mongoose from "mongoose";

export const updateUser = async (req,res)=>{
  const id = req.body.id;

  try {

    const updatedUser = await User.findByIdAndUpdate(id, {$set:req.body}, {new:true});

    res.status(200),json({success: true, message:'User updated successfully', data:updatedUser});
  }catch(error){
    res.status(500).json({success:false, message:'Fail to update user'});
  
  }
}

export const deleteUser = async (req,res)=>{
  const id = req.body.id;

  try {

    await User.findByIdAndDelete(id);

    res.status(200),json({success: true, message:'successfully deleted'});
  }catch(error){
    res.status(500).json({success:false, message:'Fail to delete user'});
  
  }
}

export const getSingleUser = async (req,res)=>{
  const id = req.params.id || req.query.id;
  console.log(id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log('Invalid ID format:', id);
    return res.status(400).json({ success: false, message: 'Invalid ID format' });
  }

  try {

    const user = await User.findById(id).select("-password");
    console.log(user);

    res.status(200).json({success: true, message:'User found', data:user});
  }catch(error){
    res.status(404).json({success:false, message:'User not found'});
  
  }
}

export const getAllUsers = async (req,res)=>{
  // const id = req.body.id;

  try {

    const users = await User.find({}).select("-password");
    console.log(users);
    

    res.status(200).json({success: true, message:'Users found', data:users});
  }catch(error){
    res.status(404).json({success:false, message:'Users not found'});
  
  }
}