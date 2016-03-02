'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Validation
 */
function validateLength (v) {
  return v.length <= 15;
}

/**
 * Category Schema
 */
var CategorySchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  name: {
    type: String,
    default: '',
    trim: true,
    unique : true,
    required: 'Name cannot be blank',
    validate: [validateLength, 'Name must be 15 characters in length or less']
  }
});

// Expose model to other objects
mongoose.model('Category', CategorySchema);
