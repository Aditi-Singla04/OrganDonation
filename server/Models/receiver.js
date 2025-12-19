const mongoose = require('mongoose');

const receiverSchema = new mongoose.Schema({
  receiverName: { type: String, required: true},
  phone: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true, enum: ['Male', 'Female', 'Other']  },
  organ: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  status: { type: String, default: "Pending" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

module.exports = mongoose.model('Receiver', receiverSchema);
