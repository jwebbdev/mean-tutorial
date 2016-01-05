'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Learning Category Schema
 */
var LearningCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  weight: {
    type: Number,
    required: true,
    default: 0
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'LearningCategory'
  }
});

mongoose.model('LearningCategory', LearningCategorySchema);
