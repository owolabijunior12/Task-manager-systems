const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [50, 'name can not be more than 50 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, 
{
  timestamps: true,
}
)

module.exports = mongoose.model('Task', TaskSchema)
