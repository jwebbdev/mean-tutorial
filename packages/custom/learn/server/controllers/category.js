'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  LearningCategory = mongoose.model('LearningCategory'),
  _ = require('lodash');

module.exports = function() {

  return {
    /**
     * Find category by id
     */
    category: function(req, res, next, id) {
      LearningCategory.load(id, function(err, category) {
        if (err) {
          return next(err);
        }
        if (!category) {
          return next(new Error('Failed to load category ' + id));
        }
        req.category = category;
        next();
      });
    },
    /**
     * Create an category
     */
    create: function(req, res) {
      var category = new LearningCategory(req.body);

      category.save(function(err) {
        if (err) {
          return res.status(500).json({
            error: 'Cannot save the category'
          });
        }

        res.json(category);
      });
    },
    /**
     * Update an category
     */
    update: function(req, res) {
      var category = req.category;

      category = _.extend(category, req.body);


      category.save(function(err) {
        if (err) {
          return res.status(500).json({
            error: 'Cannot update the category'
          });
        }

        res.json(category);
      });
    },
    /**
     * Delete an category
     */
    destroy: function(req, res) {
      var category = req.category;


      category.remove(function(err) {
        if (err) {
          return res.status(500).json({
            error: 'Cannot delete the category'
          });
        }

        res.json(category);
      });
    },
    /**
     * Show an category
     */
    show: function(req, res) {
      res.json(req.category);
    },
    /**
     * List of Articles
     */
    list: function(req, res) {
      LearningCategory.find({}).sort('-created').populate('parent', 'name').exec(function(err, categories) {
        if (err) {
          return res.status(500).json({
            error: 'Cannot list the categories'
          });
        }

        res.json(categories)
      });

    }
  };
};
