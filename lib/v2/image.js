/**
 * Image
 */

'use strict';

/**
 * Module dependencies.
 */

var lodash = require('lodash');

var utils = require('../utils');

/**
 * Initialize a new `Image` client.
 */

function Image(api) {
  this.api = api;
}

/**
 * Image details
 */

Image.prototype.get = function(opts, callback) {
  if (typeof opts === 'string' || typeof opts === 'number') {
    opts = { id: opts };
  }

  var req = {
    name: 'image.get',
    path: '/images/{id}',
    params: { id: opts.id },
    query: lodash.pick(opts, 'view'),
  };

  if (!opts.id) {
    return callback(this.api._err('id required', req));
  }

  this.api._get(req, utils.body, callback);
};

/**
 * Image search
 */

Image.prototype.search = function(opts, callback) {
  if (typeof opts === 'string' || typeof opts === 'number') {
    opts = { query: opts };
  } else if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  var req = {
    name: 'image.search',
    path: '/images/search',
    params: { id: opts.id },
    query: lodash.pick(opts,
      'category',
      'color',
      'contributor',
      'added_date',
      'added_date_start',
      'added_date_end',
      'image_type',
      'language',
      'license',
      'model',
      'orientation',
      'page',
      'per_page',
      'people_model_released',
      'people_age',
      'people_ethnicity',
      'people_gender',
      'people_number',
      'query',
      'safe',
      'sort',
      'view'
    ),
  };

  this.api._get(req, utils.body, callback);
};

/**
 * Module exports.
 */

exports.Image = Image;