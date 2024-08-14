import { FraudReportModel } from "../models/fraudReport_model.js";
import { UserModel } from "../models/user_model.js";
import { fraudReportSchema } from "../schema/fraudReport_schema.js";

export const addFraudReport=async (req, res, next)=>{
  try {
    const { error, value } = fraudReportSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
  
    const id = req.session?.user?.id || req?.user?.id;
  
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).send("User not found");
    }
  
    const newReport = await FraudReportModel.create({
      ...value,
      user: id,
    });
  
    user.fraudReport.push(newReport._id);
  
    await user.save();
  
    res.status(201).json({
      message: "Your fraud report has been successfully submitted.",
    });
    
    
  } catch (error) {
    next(error)
  }
}


export const deleteFraudReport = async (req, res, next)=>{
  try {
    const id = req.session?.user?.id || req?.user?.id;
      console.log('User ID:', id);
      console.log('Report ID:', req.params.reportId);
       // Find the user to ensure they exist
      const user = await UserModel.findById(id);
      if (!user) {
        return res.status(404).send("User not found");
      }
  
       // Find and delete the report where _id matches and user ID matches
      const deletedReport = await FraudReportModel.findByIdAndDelete({
        _id: req.params.reportId,
        user: id
      });
   
      if (!deletedReport) {
        return res.status(404).send({ message:"Report not found or you do not have permission to delete this report."});
      }
    
      user.fraudReport.pull(req.params.reportId);
      await user.save();
    
      res.status(200).json({
        message: "Your fraud report has been successfully deleted."});
      
    
  } catch (error) {
    next(error)
  }
}
  

export const updateFraudReport = async (req, res, next) => {
  try {
    // Validate the request body
    const { error, value } = fraudReportSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Get user ID from session or JWT token
    const id = req.session?.user?.id || req?.user?.id;
    console.log("User ID:", id);
    console.log("Report ID:", req.params.reportId);

    // Find the user to ensure they exist
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Find and update the report where _id matches and user ID matches
    const updateReport = await FraudReportModel.findByIdAndUpdate(
      { _id: req.params.reportId, user: id }, // Query to find the report
      value, // Data to update
      { new: true } // Return the updated document
    );

    // Check if the report was found and updated
    if (!updateReport) {
      return res.status(404).send({
        message:
          "Report not found or you do not have permission to update this report.",
      });
    }

    res.status(200).json({
      message: "Your fraud report has been successfully updated.",
      report: updateReport
    });
  } catch (error) {
    console.error(error);
    next(error);
  }

 };
 




