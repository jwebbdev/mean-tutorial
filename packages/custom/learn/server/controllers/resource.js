'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  LearningResource = mongoose.model('LearningResource'),
  _ = require('lodash');

module.exports = function() {

  return {
    /**
     * Find resource by id
     */
    resource: function(req, res, next, id) {
      LearningResource.load(id, function(err, resource) {
        if (err) {
          return next(err);
        }
        if (!resource) {
          return next(new Error('Failed to load resource ' + id));
        }
        req.resource = resource;
        next();
      });
    },
    /**
     * Create an resource
     */
    create: function(req, res) {
      var resource = new LearningResource(req.body);

      resource.save(function(err) {
        if (err) {
          return res.status(500).json({
            error: 'Cannot save the resource'
          });
        }

        res.json(resource);
      });
    },
    /**
     * Update an resource
     */
    update: function(req, res) {
      var resource = req.resource;

      resource = _.extend(resource, req.body);


      resource.save(function(err) {
        if (err) {
          return res.status(500).json({
            error: 'Cannot update the resource'
          });
        }

        res.json(resource);
      });
    },
    /**
     * Delete an resource
     */
    destroy: function(req, res) {
      var resource = req.resource;


      resource.remove(function(err) {
        if (err) {
          return res.status(500).json({
            error: 'Cannot delete the resource'
          });
        }

        res.json(resource);
      });
    },
    /**
     * Show an resource
     */
    show: function(req, res) {
      res.json(req.resource);
    },
    /**
     * List of Articles
     */
    list: function(req, res) {
      LearningResource.find({}).sort('-created').populate('category', 'name weight').exec(function(err, resources) {
        if (err) {
          return res.status(500).json({
            error: 'Cannot list the resources'
          });
        }

        res.json(resources)
      });

    }
  };
};
