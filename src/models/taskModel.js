const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  data:{
      type: Date,
      required: true
  },
  frequency:{
      type: String,
      required:true
  },
  duration:{
      type: Number,
      required: true
  },
  deadline:{
      type:Date,
      required: true
  },
  status:{
      type: Number,
      required: true,
      default: 0
  },
  description:{
      type: String,
      required: false,
  },
  idUser:{
      type:String,
      required: true
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);