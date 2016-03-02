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
    // default values can be set
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
    required: 'name cannot be blank',
    validate: [validateLength, 'name must be 15 characters in length or less']
  }
});

mongoose.model('Category', CategorySchema);
