import mongoose from 'mongoose';

//schema for form data
const FormDataSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 40,
    trim: true,
  },
  middleName: {
    type: String,
    maxlength: 40,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 40,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    match: /^\d+$/,
    maxlength: 15,
  },
  email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    trim: true,
  },
  university: {
    type: String,
    required: true,
    maxlength: 100,
    trim: true,
  },
  linkedin: {
    type: String,
    required: true,
    maxlength: 100,
    match: /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+$/,
    trim: true,
  },
  portfolio: {
    type: String,
    maxlength: 100,
    match: /^(https?):\/\/[^\s$.?#].[^\s]*$/,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  position: {
    type: String,
    required: true,
    enum: ["Software Developer", "UI/UX Designer", "Data Analyst", "Marketing Intern", "Product Manager", "Graphic Designer"],
  },
  languages: {
    type: String,
    maxlength: 100,
    default: '',
  },
  hobbies: {
    type: String,
    maxlength: 150,
    trim: true,
  },
  additionalComments: {
    type: String,
    maxlength: 250,
    trim: true,
  },
  salary: {
    type: Number,
    required: true,
    min: 5000,
    max: 1000000,
  },
  workingCondition: {
    type: String,
    required: true,
    enum: [
      "Full time (5 days/week)",
      "Part time (4 days/week)",
      "Part time (3 days/week)",
      "Part time (2 days/week)",
      "Hybrid (1 day WFH)",
      "Hybrid (2 days WFH)",
      "Hybrid (3 days WFH)",
      "Hybrid (4 days WFH)",
    ],
  },
  location: {
    type: String,
    required: true,
    enum: ["City A - Office A", "City B - Office B", "City C - Office C"],
  },
});

const FormData = mongoose.models.FormData || mongoose.model('FormData', FormDataSchema);

export default FormData;
