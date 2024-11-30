import Doctor from '../models/DoctorSchema.js';

export const updateDoctor = async (req,res)=>{
  const id = req.body.id;

  try {

    const updatedDoctor = await Doctor.findByIdAndUpdate(id, {$set:req.body}, {new:true});

    res.status(200),json({success: true, message:'Doctor updated successfully', data:updatedDoctor});
  }catch(error){
    res.status(500).json({success:false, message:'Fail to update Doctor'});
  
  }
}

export const deleteDoctor = async (req,res)=>{
  const id = req.body.id;

  try {

    await Doctor.findByIdAndDelete(id);

    res.status(200),json({success: true, message:'successfully deleted'});
  }catch(error){
    res.status(500).json({success:false, message:'Fail to delete Doctor'});
  
  }
}

export const getSingleDoctor = async (req,res)=>{
  const id = req.body.id;

  try {

    const doctor = await Doctor.findById(id,).select("-password");

    res.status(200),json({success: true, message:'Doctor found', data:doctor});
  }catch(error){
    res.status(404).json({success:false, message:'Doctor not found'});
  
  }
}

export const getAllDoctors = async (req,res)=>{
  const id = req.body.id;

  try {

    const {query} = req.query;

    let doctors;
    if(query){
      doctors = await Doctor.find({ isApproved:'approved', $or: [{name:{$regex:query, $options:'i'}},{specialization:{$regex:query, $options:'i'}}]}).select("-password");
    }
    else{
      const doctors = await Doctor.find({isApproved:'approved'}).select("-password");

    }

    res.status(200),json({success: true, message:'Doctors found', data:doctors});
  }catch(error){
    res.status(404).json({success:false, message:'Doctors not found'});
  
  }
}