import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    NanoId: {
      type: String,
      required: true,
      unique: true,
    },
    original_url: {
      type: String,
      required: true,
    },
    visit_History: [{ timestamp: { type: String} }],
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

export default URL;
 
// We can't simply export the urlSchema because we need to create a model using it then only we will be able to use predefined functions of mongoose.model. So we create a model using the schema and export it.