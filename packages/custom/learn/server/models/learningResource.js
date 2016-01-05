'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Learning Resource Schema
 */
var LearningResourceSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'LearningCategory',
    required: true
  },
  created: {
    type: Date,
    default: Date(),
    required: true
  },
  version: {
    type: String
  },
  link: {
    type: String,
    required: true
  },
  internal: {
    type: Boolean,
    required: true,
    default: false
  },
  type: {
    type: String,
    enum: ['Youtube',
      'Tutorial',
      'Reference Documentation',
      'Blog',
      'Tool',
      'IDE',
      'Service'],
    required: true
  }
});

mongoose.model('LearningResource', LearningResourceSchema);
